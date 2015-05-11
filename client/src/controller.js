var Marionette = require('backbone.marionette'),
    ContactsView = require('./views/contacts'),
    ContactDetailsView = require('./views/contact_details'),
    AddContactView = require('./views/add'),
    NavMainView = require('./views/nav-main'),
    NavSideView = require('./views/nav-side'),
    DocumentsView = require('./views/documents'),
    DocumentsCollection = require('./collections/documents');

module.exports = Controller = Marionette.Controller.extend({
    initialize: function() {
        App.core.vent.trigger('app:log', 'Controller: Initializing');
        window.App.views.contactsView = new ContactsView({ collection: window.App.data.contacts });

        window.App.views.navMainView = new NavMainView();
        this.renderNav(window.App.views.navMainView, 'nav-main');

        window.App.views.navSideView = new NavSideView();
        this.renderNav(window.App.views.navSideView, 'nav-side');
    },

    home: function() {
        App.core.vent.trigger('app:log', 'Controller: "Home" route hit.');
        var view = window.App.views.contactsView;
        this.renderView(view);
        window.App.router.navigate('/');
    },

    details: function(id) {
        App.core.vent.trigger('app:log', 'Controller: "Contact Details" route hit.');
        var view = new ContactDetailsView({ model: window.App.data.contacts.get(id)});
        this.renderView(view);
        window.App.router.navigate('/details/' + id);
    },

    add: function() {
        App.core.vent.trigger('app:log', 'Controller: "Add Contact" route hit.');
        var view = new AddContactView();
        this.renderView(view);
        window.App.router.navigate('/add');
    },

    documents: function() {
        var documents = new DocumentsCollection(),
            controller = this;

        documents.fetch({
            success: function() {
                App.data.documents = documents;
                //console.log(App.data.documents);
                App.core.vent.trigger('app:log', 'Controller: "Documents" route hit.');
                var view = new DocumentsView({ collection: App.data.documents });
                controller.renderView(view);
                window.App.router.navigate('/documents');
            }
        });
    },

    document: function(id) {
        App.core.vent.trigger('app:log', 'Controller: "Document Details" route hit.');
        var view = new DocumentDetailsView({ model: window.App.data.documents.get(id)});
        this.renderView(view);
        window.App.router.navigate('/document/' + id);
    },

    renderView: function(view) {
        this.destroyCurrentView(view);
        App.core.vent.trigger('app:log', 'Controller: Rendering new view.');
        $('#app').html(view.render().el);
    },

    renderNav: function(view, id) {
        App.core.vent.trigger('app:log', 'Controller: Rendering ' + id + '.');
        $('#' + id).html(view.render().el);
    },

    destroyCurrentView: function(view) {
        if (!_.isUndefined(window.App.views.currentView)) {
            App.core.vent.trigger('app:log', 'Controller: Destroying existing view.');
            window.App.views.currentView.close();
        }
        window.App.views.currentView = view;
    }
});

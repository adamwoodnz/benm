var Marionette = require('backbone.marionette');

var contactView = Marionette.ItemView.extend({
    template: require('../../templates/contact_small.hbs'),

    initialize: function() {
        this.listenTo(this.model, 'change', this.render);
    },

    events: {
        'click': 'showDetails'
    },

    showDetails: function() {
        window.App.core.vent.trigger('app:log', 'Contacts View: showDetails hit.');
        window.App.controller.details(this.model.id);
    }
});

module.exports = ContactsView = Marionette.CollectionView.extend({
    initialize: function() {
        this.listenTo(this.collection, 'change', this.render);
    },
    itemView: contactView
});

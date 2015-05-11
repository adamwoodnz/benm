var Marionette = require('backbone.marionette');

var documentView = Marionette.ItemView.extend({
    template: require('../../templates/document.hbs'),

    initialize: function() {
        this.listenTo(this.model, 'change', this.render);
    },

    events: {
        //'click .document': 'showDocument',
        'click .back': 'goBack'
    },

    goBack: function(e) {
        e.preventDefault();
        window.App.controller.home();
    },

    showDocument: function() {
        window.App.core.vent.trigger('app:log', 'Documents View: showDocument hit.');
        window.App.controller.document(this.model.id);
    }
});

module.exports = DocumentsView = Marionette.CollectionView.extend({
    initialize: function() {
        this.listenTo(this.collection, 'change', this.render);
    },
    itemView: documentView
});

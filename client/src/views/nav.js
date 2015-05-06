var Marionette = require('backbone.marionette');

module.exports = NavView = Marionette.ItemView.extend({
    template: require('../../templates/nav.hbs'),

    events: {
        'click a': 'navigate'
    },

    navigate: function(e) {
        e.preventDefault();

        route = $(e.currentTarget).attr('href').replace(/^\//,'').replace('\#\!\/','') || 'home';

        window.App.controller[route]();
    }
});

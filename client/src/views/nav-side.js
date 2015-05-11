var Marionette = require('backbone.marionette');

module.exports = NavSideView = Marionette.ItemView.extend({
    template: require('../../templates/nav-side.hbs'),

    events: {
        'click a': 'navigate'
    },

    navigate: function(e) {
        e.preventDefault();

        var $navItem = $(e.currentTarget),
            activeClass = 'uk-active';

        route = $navItem.attr('href').replace(/^\//,'') || 'home';

        try {
           window.App.controller[route]();

           $('li.' + activeClass).removeClass(activeClass);

            $navItem.parent().addClass(activeClass);
        }
        catch (e) {
           window.App.core.vent.trigger('app:log', 'Side Nav View: route not found.');
        }
    }
});

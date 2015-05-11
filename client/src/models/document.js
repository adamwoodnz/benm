var Backbone = require('backbone');

module.exports = DocumentModel = Backbone.Model.extend({
    idAttribute: '_id',
    urlRoot: 'api/documents'
});

var Backbone = require('backbone'),
    DocumentModel = require('../models/document');

module.exports = DocumentsCollection = Backbone.Collection.extend({
    model:  DocumentModel,
    url: '/api/documents'
});

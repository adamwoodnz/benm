var models = require('../app/models'),
    md5 = require('MD5');

module.exports = {
    index: function(req, res) {
        models.Document.find({}, function(err, data) {
            console.log(data);
            res.json(data);
        });
    },
    getById: function(req, res) {
        models.Document.find({ _id: req.params.id }, function(err, document) {
            if (err) {
                res.json({error: 'Document not found.'});
            } else {
                res.json(document);
            }
        });
    }
};

var home = require('../controllers/home'),
	contacts = require('../controllers/contacts'),
	documents = require('../controllers/documents');

module.exports.initialize = function(app) {
	app.get('/', home.index);
	app.get('/add', home.index);
	app.get('/details/*', home.index);

	// contacts
	app.get('/api/contacts', contacts.index);
	app.get('/api/contacts/:id', contacts.getById);
	app.post('/api/contacts', contacts.add);
	// app.put('/api/contacts', contacts.update);
	app.delete('/api/contacts/:id', contacts.delete);

	// documents
	app.get('/documents', home.index);
	app.get('/api/documents', documents.index);
	app.get('/api/document/:id', documents.getById);
};

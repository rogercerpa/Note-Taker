const notesData = require('../db/db');

module.exports = function(app) {
	app.get('/api/db', function(req, res) {
		res.json(notesData);
	});
};

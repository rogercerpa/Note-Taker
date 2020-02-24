const notesData = require('../db/notesData');

function setAPIroutes(app) {
	app.get('/api/notes', function(req, res) {
		res.json(notesData);
	});

	app.post('/api/notes', function(req, res) {
		const newNote = req.body;
		notesData.push(newNote);
		res.json(true);
	});
	// app.delete('api/notes', function(req, res) {});
}

module.exports = setAPIroutes;

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

	app.get('/api/notes/:id', function(req, res) {
		const chosen = req.params.id;

		console.log(chosen);

		for (let i = 0; i < note.length; i++) {
			if (chosen === id[i].routeName) {
				return res.json(id[i]);
			}
		}

		return res.json(false);
	});
	// app.delete('api/notes', function(req, res) {});
}

module.exports = setAPIroutes;

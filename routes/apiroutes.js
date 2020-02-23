const notesData = require('../db/notesData');
const fs = require('fs');

module.exports = function(app) {
	app.get('api/notes', function(req, res) {
		res.json(JSON.parse(notesData));
	});

	app.post('api/notes', function(req, res) {
		notesData.push(req.body);
		res.json(true);
		fs.writeFile(JSON.stringify(notesData));
	});
};

// app.delete("api/notes/:id", function(req, res){
// 	if (notesData.id ===){

// 	}
// })

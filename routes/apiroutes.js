const notesData = require('../db/db1.json');

module.exports = function(app) {
	app.get('/api/notes', function(req, res) {
		res.json(notesData);
	});
};

// app.delete("api/notes/:id", function(req, res){
// 	if (notesData.id ===){

// 	}
// })

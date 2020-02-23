var path = require('path');

// shows the user the pages html content

module.exports = function(app) {
	app.get('/index', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/index.html'));
	});

	app.get('/notes', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/notes.html'));
	});

	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/index.html'));
	});
};

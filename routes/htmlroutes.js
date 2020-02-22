var path = require('path');

// shows the user the pages html content

module.exports = function(app) {
	app.get('/api/index', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/index.html'));
	});

	app.get('/api/notes', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/notes.html'));
	});

	app.get('*', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/index.html'));
	});
};

const notes = require('./../controllers/notes.js');
const {resolve} = require('path');
module.exports = function (app) {
	//Set up routes
	// Index route
	app.post('/api/addNote', notes.addNote);
	app.get('/api/getNotes', notes.getNotes);

	app.all("*", (req, res, next) => {
		res.sendfile(resolve("./public/dist/index.html"));
	})

};

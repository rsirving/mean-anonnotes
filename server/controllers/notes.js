const mongoose = require('mongoose');
const Note = mongoose.model('Note');
const bodyParser = require('body-parser');

module.exports = {
	index: function (req, res) {
		console.log('Hit home route');
		let err = false
		if (err) return res.status(400).json({errors:'failure'})
		return res.json({success:'success'})
	},

	addNote: function (req, res) {
		const newNote = new Note(req.body);
		newNote.save()
			.then(() => {
				return res.json(newNote);
			})
			.catch(err => {
				return res.status(500).send(err);
			})
	},

	getNotes: function (req, res) {
		Note.find({}, function (err, notes){
			if (err){
				console.log(err);
				return res.json(false);
			} else {
				return res.json(notes);
			}
		})
	}
}

'use strict';
const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
	text: String,
	date: Date
})
const Note = mongoose.model('Note', NoteSchema)

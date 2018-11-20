const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const CommentSchema = new Schema({
	name: {
		type: String,
		required: true
    },
    comment: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	}
});

//exports the model to bring into to other files
module.exports = Comment = mongoose.model('comment', CommentSchema);
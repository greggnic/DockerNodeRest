var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TodoSchema = new Schema({
	name: String,
	complete: Boolean
});

module.exports = mongoose.model('todo', TodoSchema);
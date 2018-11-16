const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    desc: String,
    complete: Boolean,
    userId: String,
    listId: String
});

module.exports = mongoose.model("Todo", todoSchema);

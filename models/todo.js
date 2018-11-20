const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title: String,
    desc: String,
    complete: Boolean,
    userId: String,
    listId: String
});

module.exports = mongoose.model("Todo", todoSchema);

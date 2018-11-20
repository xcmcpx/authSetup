const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoListSchema = new Schema({
    title: String,
    userId: String
});

module.exports = mongoose.model("TodoList", todoListSchema);
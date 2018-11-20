const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    lName: String,
    email: String,
    pass: String,
});

module.exports = mongoose.model("User", userSchema);
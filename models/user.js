const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    name: String,
    lName: String,
    email: String,
    pass: {
        type: String,
        required: true
    }
});

userSchema.pre('save', async function(next) {
    try{
        //generat salt
        const salt = await bcrypt.genSalt(10);
        //hash pass with salt generated
        const passHash = await bcrypt.hash(this.pass, salt);
        //assign new pass to hashed pass
        this.pass = passHash;
        next();
    }catch(error){
        next(error);
    }
});

userSchema.methods.isValidPassword = async function(newPassword) {
    try{
        return await bcrypt.compare(newPassword, this.pass);
    }catch(error){
        throw new Error(error);
    }
}

module.exports = mongoose.model("User", userSchema);
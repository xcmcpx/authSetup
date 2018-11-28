const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    method: {
        type: String,
        enum: ['local', 'google', 'facebook'],
        required: true
    },
    local: {
        name: String,
        lName: String,
        email: {
            type: String,
            lowercase: true
        },
        pass: {
            type: String
        }
    },
    google: {
        id: {
            type: String
        },
        email: {
            type: String,
            lowercase: true
        }
    },
    facebook: {
        id: {
            type: String
        },
        email: {
            type: String,
            lowercase: true
        }
    }
});

userSchema.pre('save', async function(next) {
    try{
        if(this.method !== 'local'){
            next();
        }
        //generat salt
        const salt = await bcrypt.genSalt(10);
        //hash pass with salt generated
        const passHash = await bcrypt.hash(this.local.pass, salt);
        //assign new pass to hashed pass
        this.local.pass = passHash;
        next();
    }catch(error){
        next(error);
    }
});

userSchema.methods.isValidPassword = async function(newPassword) {
    try{
        return await bcrypt.compare(newPassword, this.local.pass);
    }catch(error){
        throw new Error(error);
    }
}

module.exports = mongoose.model("User", userSchema);
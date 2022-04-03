const  mongoose  = require("mongoose");

const userSchema = new mongoose.Schema({

    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },

    picture:{
        type:String
    },

    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        // required:true
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User
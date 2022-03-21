const  mongoose  = require("mongoose");

const goalSchema = new mongoose.Schema({

    title:{
        type:String,
        required:true,
    },

})

const Goal = mongoose.model('Goal', goalSchema);

module.exports = Goal
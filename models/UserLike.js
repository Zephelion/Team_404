const  mongoose  = require("mongoose");
var Schema = mongoose.Schema;

const UserLikeSchema = new mongoose.Schema({

    user: { type: Schema.Types.ObjectId, ref: 'User' },
    liked_user: { type: Schema.Types.ObjectId, ref: 'User' },

})

const UserLike = mongoose.model('UserLike', UserLikeSchema);

module.exports = UserLike;
const  mongoose  = require("mongoose");
var Schema = mongoose.Schema;

const UserGoalSchema = new mongoose.Schema({

    user: { type: Schema.Types.ObjectId, ref: 'User' },
    goals: [{ type: Schema.Types.ObjectId, ref: 'Goal' }],

})

const UserGoal = mongoose.model('UserGoal', UserGoalSchema);

module.exports = UserGoal;
const User = require('../models/User');
const Goals = require('../models/Goal');
const UserGoals = require('../models/UserGoal');


const fetchUsers = async (req,res) =>{


    const goals = await Goals.find().lean();

    User.find().lean().then(users => {

        // console.log(users);
        res.render('filter', {
            users:users,
            goals:goals,
        })
    })

}

const filteredUser = async (req,res) => {

    console.log(req.body);

    const goal = req.body.goals;
    
    UserGoals.find({goals: goal}).populate('user').lean().then(usergoal => {
        res.send(usergoal);
    })

}



module.exports = {
    fetch: fetchUsers,
    filtereduser: filteredUser,
}
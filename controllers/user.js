const User = require('../models/User');
const Goals = require('../models/Goal');
const UserGoals = require('../models/UserGoal');
const UserLike = require('../models/UserLike');

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

    // console.log(req.body);

    const goal = req.body.goals;
    
    UserGoals.find({goals: goal}).populate('user').lean().then(usergoal => {

        res.send(usergoal);
    })

}


const findUser = (req,res) => {

    const id = req.body.id;

    User.findOne({_id: id}).then(user => {
        res.send(user)
    })
}

const like = async (req,res) => {

    //pak de user zijn user id uit de client side
    const likedUser = req.body.id;


    //pak de ingelogde gebruiker uit de sessie
    session = req.session

    //zoek de user in de database
    const loggedUser = await User.findOne({email: session.email}).lean();

    const loggedUserId = loggedUser._id

    console.log(loggedUserId);

    //sla de like op in de database
    const UserLiked = new UserLike({

        user: loggedUserId,

        liked_user: likedUser,

    })

    // console.log(UserLiked);

    UserLiked.save()

    console.log("geliked");

    res.redirect('/users');

}

//add user to profile
const fetchOnesuser = async (req,res) =>{

    const userData = await User.findOne(req.session).lean();
    //console.log(userData);

    res.render("profile", userData);
}

const updateOnesuser = async (req,res) =>{

    const userData = await User.findOne(req.session).lean();
    //console.log(userData);

    res.render("update", userData);
}

//update functie
const updateOne = async (req,res) =>{
     try {
        const filter = (req.session);

        const update = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        age: req.body.age,
        email: req.body.email
        };

         await User.findOneAndUpdate(filter, update).lean(); 

         const userData = await User.findOne(req.session).lean();
         //console.log(userData);
     
         res.render("profile", userData);

    } catch (error) {
        throw new Error("Profile not updated");
    }
}

module.exports = {

    fetch: fetchUsers,
    filtereduser: filteredUser,
    finduser: findUser,
    like: like,
    fetchOne:fetchOnesuser,
    updateUser:updateOnesuser,
    updateOne,updateOne,


}
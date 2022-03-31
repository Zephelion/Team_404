const User = require('../models/User');
const Goals = require('../models/Goal');
const UserGoals = require('../models/UserGoal');
const bcrypt = require('bcrypt');
const UserLike = require('../models/UserLike');


let session


const saltRounds = 10;



//geef de user mee naar de volgende view om de data daar te kunnen gebruiken
const passUser = (req,res) =>{
    const userInfo = req.query;
    //pak alle fitness goals in de database en geef die mee naar de view
    Goals.find().lean().then(goals =>{
        res.render('step', {

            info:userInfo,
            goals:goals,
        })

    })

}




const login = async (req,res) =>{
    
    try {
        const checkuser = await User.findOne({
            email: req.body.email
        });
        if (checkuser) {
            const compare = await bcrypt.compare(req.body.password, checkuser.password);
            if (compare) {
                session = req.session
                
                session.email = req.body.email

                console.log("Inloggen voltooid!");
                console.log(session);
                res.redirect("/users");

            } else {
                console.error("Foute gebruikersnaam of wachtwoord")
                res.redirect("/")
            }
        } else {
            console.error("Foute gebruikersnaam of wachtwoord")
            res.redirect("/")
        }
    } catch (error) {
        console.error(error);
        res.redirect("/")
    }
}


const register = async (req,res) => {
    //hash de wachtwoord
    const password = await bcrypt.hash(req.body.password, saltRounds);

    //ik zet de request in een form object
    const form = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        age: req.body.age,
        picture: req.file.filename,
        email: req.body.email,
        password: password
    }

    //geef het form object mee en maak een nieuwe gebruiker
    const user = new User(form);

    //sla de gebruiker op in de database
    user.save(async (error) => {
        if (error){
            console.log(error);
            return res.status(500).redirect('/register')
        }else{
            console.log("succes");

            //zoek naar de opgeslagen user via email
            const savedUser = await User.findOne({email: req.body.email}).lean();

            //maak een nieuwe usergoals en pass de usergoals als object mee
            const userGoals = new UserGoals({
                goals: req.body.goals,
                user:  savedUser, 
            })

            //sla op en vervolgens een redirect
            userGoals.save();

            res.redirect('/users');

        }
    })

}

const fetchUsers = async (req,res) =>{


    const goals = await Goals.find().lean();

    User.find().lean().then(users => {

        // console.log(users);
        res.render('filter', {
            users:users,
            goals:goals,
        })
    })

    // UserGoals.find({goals: goal}).populate('user').lean().then((usergoal) => {
            
    //     res.render('filter', {
    //         usergoals:usergoal,
    //         goals: goals,
    //     })
    // })
}

const filteredUser = async (req,res) => {

    console.log(req.body);

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

    const likedUser = req.body.id;

    console.log(likedUser)

    //pak de ingelogde gebruiker
    session = req.session
    const loggedUser = await User.findOne({email: session.email}).lean();

    const UserLike = new UserLike({
        user: loggedUser._id,
        liked_user: likedUser,
    })

    UserLike.save()

    res.redirect('/users');
}

module.exports = {
    fetch: fetchUsers,
    pass: passUser,
    login:login,
    register: register,
    filtereduser: filteredUser,
    finduser: findUser,
    like: like

}
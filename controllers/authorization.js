const User = require('../models/User');
const UserGoals = require('../models/UserGoal');
const bcrypt = require('bcrypt');
const Goals = require('../models/Goal')

let session


const saltRounds = 10;


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

            session = req.session
            session.email = req.body.email

            console.log('registreren voltooid');

            res.redirect('/users');

        }
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

                console.log(session);
                
                session.email = req.body.email

                console.log("Inloggen voltooid!");
                res.redirect("/users");

            } else {
                console.error("Foute gebruikersnaam of wachtwoord")
                res.redirect("/welcome")
            }
        } else {
            console.error("Foute gebruikersnaam of wachtwoord")
            res.redirect("/welcome")
        }
    } catch (error) {
        console.error(error);
        res.redirect("/welcome")
    }
}

const logout = (req,res) => {
    req.session.destroy();
    res.redirect('/welcome');
}

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


module.exports = {
    pass: passUser,
    login:login,
    register: register,
    logout:logout,

}
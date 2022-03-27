const User = require('../models/User');
const Goals = require('../models/Goal');
const UserGoals = require('../models/UserGoal');


//functie om de user te storen in de database
const storeUser =  (req,res) => {
        //zet de req in een object
        const form = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            age: req.body.age,
            picture: req.file.filename,
            email: req.body.email,
            password: req.body.password,
        }

        //maak een nieuwe user en geef de form object mee als parameter
        const user = new User(form);
        //sla op aan het einde
        user.save(function(err){
            
 
        })

        res.redirect('/users');


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


//pak alle users uit de database en geef die mee naar de view
const fetchUsers = (req,res) => {
    User.find().lean().then(users => {

        // console.log(users);
        res.render('userindex', {
            users:users,
        })
    })
}

const filter = (req,res) =>{
    const age = '21';

    User.find({age: age}, function(err,doc){
        console.log(doc);
    })
}

module.exports = {
    store: storeUser,
    fetch: fetchUsers,
    pass: passUser,
    filter: filter
}
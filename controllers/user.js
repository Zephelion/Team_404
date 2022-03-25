const User = require('../models/User');
const Goals = require('../models/Goal');
const UserGoals = require('../models/UserGoal');
const nodemailer = require("nodemailer");


//functie om de user te storen in de database
const storeUser = async (req,res) => {

        //zet de req in een object
        const form = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            age: req.body.age,
            email: req.body.email,
            password: req.body.password,
        }

        //maak een nieuwe user en geef de form object mee als parameter
        const user = new User(form);
        
        //sla op aan het einde
        main().catch(console.log);
        user.save(function(err){
            
 
        })

        //zoek naar de opgeslagen user via email
        const savedUser = await User.findOne({email: req.body.email}).lean();

        //maak een nieuwe usergoals en pass de usergoals als object mee
        const userGoals = new UserGoals({
            goals: req.body.goals,
            user:  savedUser, 
        })

        //sla op en vervolgens een redirect
        userGoals.save();

        res.redirect('/users')






        // user.save().then(user => {

        //     console.log(user);
        //     const user_goals = {
        //         user:user,
        //         goals:req.body.goals
        //     }
        //     console.log(user_goals)
        //     const userGoals = new UserGoals(user_goals);
            
        //     userGoals.save();

        //     res.redirect('/users');
        // })


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

async function main() {
    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: testAccount.user, // generated ethereal user
          pass: testAccount.pass, // generated ethereal password
        },
      });

      let info = await transporter.sendMail({
        from: '"Fitbud!" <fitbudtest@outlook.com>', // sender address
        to: "daanhoning@kpnmail.nl", // list of receivers
        subject: "Registratie succeeded!", // Subject line
        text: "Welcome to fitbud! Find your fitbuddy on our platform!", // plain text body
        html: "<b>Welcome to fitbud! Find your fitbuddy on our platform!</b>", // html body
      });

      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}
module.exports = {
    store: storeUser,
    fetch: fetchUsers,
    pass: passUser,
    filter: filter
}

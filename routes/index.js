const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const user = require('../controllers/user');
const path = require('path');

//multer invoegen
const multer = require("multer");
const UserGoal = require('../models/UserGoal');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../public/uploads") );
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + "-" + Date.now() + file.originalname);
  },
});

//afbeeldingen kunnen toevoegen
const upload = multer({ storage: storage});


//Hier zet ik alle routes en zo zet ik ze weer naar een controller
router.get('/', (req,res,) => {
    res.render('start');

});

//hier import ik de usercontroller en de benodigde functies die ik daarin heb geschreven

router.get('/users', user.fetch);

router.get('/create', user.pass);

router.get('/register', (req,res) => {
    res.render('register');
})

//page not found
// router.get("*", (req, res) => {
//     res.send("Not found");
// });

router.get('/users', user.fetch);

router.post('/filteruser', user.filtereduser);


router.post('/login', user.login);


router.post('/register', upload.single("picture"), user.register);

router.get('/profile', user.fetchOne);

// router.post('/register', user.register);



module.exports = router;
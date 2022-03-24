const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const user = require('../controllers/user');

let session;

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
router.get("*", (req, res) => {
    res.send("Not found");
});

router.get('/filter', user.filter);


router.post('/login', user.login);

router.get('/filter', user.filter);

// router.post('/register', user.store);

router.post('/register', user.register);


module.exports = router;
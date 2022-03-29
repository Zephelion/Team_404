const express = require('express');
const router = express.Router();
const home = require('../controllers/home');


//Hier zet ik alle routes en zo zet ik ze weer naar een controller
router.get('/', (req,res,) => {
    res.render('start');

});

module.exports = router;
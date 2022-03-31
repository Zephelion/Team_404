const express = require('express');
const router = express.Router();
const homeRoutes = require('./home');
const userRoutes = require('./users');
const loginRoutes = require('./login');
const registerRoutes = require('./register');
const logoutRoutes = require('./logout');
const goalRoutes = require('./goals');
const loggedUser = require('../middleware/authorization')


router.use('/welcome',loggedUser.guest, homeRoutes);
router.use('/users', loggedUser.loggeduser, userRoutes);
router.use('/register', registerRoutes);
router.use('/login', loginRoutes);
router.use('/logout', logoutRoutes);


// router.get('/logout', user.fetch);


router.post('/getuser', user.finduser);


//page not found
// router.get("*", (req, res) => {
//     res.send("Not found");
// });


router.post('/like', user.like);




module.exports = router;
const express = require('express');
const router = express.Router();
const homeRoutes = require('./home');
const userRoutes = require('./users');
const loginRoutes = require('./login');
const registerRoutes = require('./register');
const logoutRoutes = require('./logout');
const likeRoutes = require('./likes');
const goalRoutes = require('./goals');
const loggedUser = require('../middleware/authorization');



router.use('/', homeRoutes);
router.use('/users', loggedUser.loggeduser, userRoutes);
router.use('/register', registerRoutes);
router.use('/login', loginRoutes);
router.use('/like', likeRoutes);
router.use('/logout', logoutRoutes);



//page not found
// router.get("*", (req, res) => {
//     res.send("Not found");
// });





// router.post('/register', user.register);



module.exports = router;
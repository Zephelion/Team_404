const express = require('express');
const router = express.Router();
const user = require('../controllers/user');

router.get('/', user.fetch);
router.post('/filter', user.filtereduser);
router.post('/getuser', user.finduser);

router.get('/profile', user.fetchOne);
router.get('/update', user.updateUser);
router.post('/update', user.updateOne);


module.exports = router;
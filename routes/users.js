const express = require('express');
const router = express.Router();
const user = require('../controllers/user');

router.get('/', user.fetch);
router.post('/filter', user.filtereduser);
router.post('/getuser', user.finduser);


module.exports = router;
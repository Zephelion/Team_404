const express = require('express');
const router = express.Router();
const authorization = require('../controllers/authorization');
const path = require('path');

//multer invoegen
const multer = require("multer");
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


router.get('/', (req,res) => {
    res.render('register');
})
router.get('/create', authorization.pass);
router.post('/', upload.single("picture"), authorization.register);

module.exports = router;
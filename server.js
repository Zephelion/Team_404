const express = require('express');
const { engine } = require('express-handlebars');
require('dotenv').config()

const app = express();
const port = 3000;
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const routes = require("./routes");

connectDB();
const urlEncoded = bodyParser.urlencoded({ extended: false })



app.engine('hbs', engine({
    extname: "hbs",
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir:__dirname + '/views/partials',
}));
app.set('view engine', 'hbs');
app.set('views', './views');
app.use('/public', express.static("public"));
app.use('/', urlEncoded , routes);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
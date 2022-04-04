const express = require('express');
const { engine } = require('express-handlebars');
require('dotenv').config()

const app = express();
const port = 3000;
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const routes = require("./routes");
const session = require('express-session');
const path = require('path');

connectDB();
const urlEncoded = bodyParser.urlencoded({ extended: true })


app.use(bodyParser.json());
// app.use(session({

//     secret: process.env.SESSION_SECRET,
  
//     resave: false,
  
//     saveUninitialized: true
  
// }))

app.engine('hbs', engine({
    extname: "hbs",
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir:__dirname + '/views/partials',
}));
app.set('view engine', 'hbs');
app.set('views', './views');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/', urlEncoded , routes);



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  //halooo testing
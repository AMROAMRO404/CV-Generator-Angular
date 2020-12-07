const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('express-flash');
const CvRouter = require('./routers/cv')


const dotenv = require('dotenv');
require('dotenv').config({
    path: '.env'
});
const uri = `mongodb+srv://${process.env.MONGO_ATLAS_USERNAME}:${process.env.MONGO_ATLAS_PW}@cv-database.frkhl.mongodb.net/` +
    `${process.env.MONGO_ATLAS_DBNAME}?retryWrites=true&w=majority`;
console.log('Connecting to database...');

mongoose.connect(uri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Connected to database successfully.');
    })
    .catch((err) => {
        console.log('Unable to connect to the mongodb instance. Error: ', err);
    });



const app = express();
app.use(morgan('dev'));
app.use(cors());

app.use(session({
    secret: 'sssssssssh!!!',
    cookie: {
        maxAge: 60000
    },
    resave: false,
    saveUninitialized: false
}));
app.use(flash());

app.use(bodyParser.urlencoded({
    extended: true
})); // for admin website


app.use(bodyParser.json()); // API Request
app.use(cookieParser());




app.set('views', path.join(__dirname, '/src/views'));
app.use(express.static(__dirname + '/src/public'));
dotenv.config();

app.use(CvRouter);




module.exports = app;
const express = require("express");

const app = express();

const port = 8080;

const path = require('path');

const session = require('express-session');

app.use(session({
    secret:"asdfghjkloiuytre ",
    resave: false,
    saveUninitialized: false
}))


app.use('/', require('./routes'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.listen(port);
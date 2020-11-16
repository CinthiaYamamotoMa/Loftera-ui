const express = require('express');

const app = express();
const path = require('path');
const routerTemplate = require('./routerTemplate.js');
const router = require('./router.js');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 9000;
const session = require('express-session');
const flash = require('connect-flash');
//const ac = require('./config/access_control');

const passport = require('passport');
require('./utils/passport')(passport);

app.use('/app-assets', express.static('app-assets'));

app.use('/noty', express.static('app-assets'));

app.engine('html', require('ejs').renderFile);

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())


//app.accessControl = ac;

//app.use(function(req, res, next) {
//   res.locals.permission = ac;
//   next();
//});

app.use(
    session({
        secret: 'passport',
        resave: true,
        saveUninitialized: true,
        cookie: { maxAge: 3600000 }
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(function(err, req, res, next) {
    console.log(err);
});

app.use(flash());

app.use('/', routerTemplate);
app.use('/', router);

app.listen(PORT, () => {
    console.log(`Servidor rodando em ${PORT}`)
});
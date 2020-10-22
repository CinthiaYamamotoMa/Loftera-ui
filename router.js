const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');
var passport = require('passport');
var { ensureAuthenticated, forwardAuthenticated } = require('./controllers/authController')

// ********** GET ************
// Dashboard


// Login
router.get('/auth-login', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/auth-login.ejs')
})

// Cadastro User
router.get('/auth-register', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/auth-register.ejs')
})

// Forgot Password
router.get('/auth-forgot-password', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/auth-forgot-password.ejs')
})

// Trocar Senha
router.get('/auth-reset-password', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/auth-reset-password.ejs')
})

// Cadastro Caracteristicas
router.get('/card-caracteristica', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/card-caracteristica.ejs')
})

// Perfil
router.get('/app-user-edit', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/app-user-edit.ejs')
})

// Cadastro Imóvel


// Listagem Imóvel
router.get('/imoveis', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/imovel-listagem.ejs')
})

// Crud Imóvel


// Visualizar Imóvel
router.get('/imovel/detalhes', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/imovel-detalhes.ejs')
})

// ********** POST ************
router.post('/auth-register', (req, res) => {
    userController.store(req, res)
});

router.post('/auth', (req, res, next) => {

    const handler = passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/auth-login'
    });

    handler(req, res, next);
});

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/auth-login');
});

router.get('/', ensureAuthenticated, (req, res) => {
    res.render('ltr/vertical-menu-template-dark/index.ejs')
})

module.exports = router;
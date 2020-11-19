const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');
const interestedController = require('./controllers/interestedController');
const commentController = require('./controllers/commentController');
const imovelController = require('./controllers/imovelController');
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
router.get('/auth-reset-password/:id', (req, res) => {
    // var user = await userController.findById(req, res)
    // res.locals = { imovel }
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
router.get('/imovel/cadastro', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/imovel-cadastro.ejs')
})

// Listagem Imóvel
router.get('/imoveis', async (req, res) => {
    var imoveis = await imovelController.findAll(req, res);
    res.locals = { imoveis }
    res.render('ltr/vertical-menu-template-dark/imovel-listagem.ejs')
})

// Imóveis de Interesse
router.get('/imovel/interesse', async (req, res) => {
    var imoveis = await interestedController.findInteressados(req, res);
    res.locals = { imoveis }
    res.render('ltr/vertical-menu-template-dark/imoveis-interessados.ejs')
})

// Crud Imóvel


// Visualizar Imóvel
router.get('/imovel/detalhes/:id', async (req, res) => {
    var imovel = await imovelController.findById(req, res)
    res.locals = { imovel }
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

router.post('/comment', (req, res) => {
    commentController.store(req, res)
});

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/auth-login');
});

router.get('/', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/index.ejs', req.body)
})

module.exports = router;
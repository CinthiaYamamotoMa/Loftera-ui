const express = require('express');
const router = express.Router();
const multer  = require('multer')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'app-assets/images/portrait/small/')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname)
    }
})
const upload = multer({ storage })

const attributesController = require('./controllers/attributesController');
const rulesController = require('./controllers/rulesController');
const userController = require('./controllers/userController');
const interestedController = require('./controllers/interestedController');
const commentController = require('./controllers/commentController');
const imovelController = require('./controllers/imovelController');
const psychographicController = require('./controllers/psychographicController');
const ratingController = require('./controllers/ratingController');

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
router.get('/auth-reset-password/', (req, res) => {
    // var user = await userController.findById(req, res)
    // res.locals = { imovel }
    res.render('ltr/vertical-menu-template-dark/auth-reset-password.ejs')
})

// Cadastro Caracteristicas
router.get('/card-caracteristica', async (req, res) => {
    var caracteristicas = await psychographicController.findAll(req, res)
    res.locals = { caracteristicas: caracteristicas }
    res.render('ltr/vertical-menu-template-dark/card-caracteristica.ejs')
})

// Cadastro de tipo de conta
router.get('/role', async (req, res) => {
    res.render('ltr/vertical-menu-template-dark/role.ejs')
})

router.post('/caracteristicas', async (req, res) => {
    psychographicController.store(req, res)
})

// Perfil
router.get('/app-user-edit/:id', async (req, res) => {
    var user = await userController.findById(req, res)
    res.locals = { user }
    res.render('ltr/vertical-menu-template-dark/app-user-edit.ejs')
})

// Avatar
router.post('/avatar', upload.single("avatar"), async (req, res) => {
    userController.updateAvatar(req, res)
})

router.post('/deleteAvatar', async (req, res) => {
    userController.deleteAvatar(req, res)
})

// Cadastro Imóvel
router.get('/imovel/cadastro', async (req, res) => {
    var regras = await rulesController.findAll(req, res);
    var comodidades = await attributesController.findAll(req, res);
    res.locals = { regras, comodidades }
    res.render('ltr/vertical-menu-template-dark/imovel-cadastro.ejs')
})

// Imóveis de Interesse
router.get('/imovel/interesse/:id', async (req, res) => {
    var imoveis = await interestedController.findInteressados(req, res);
    res.locals = { imoveis }
    res.render('ltr/vertical-menu-template-dark/imoveis-interessados.ejs')
})

// Crud Imóvel


// Crud Imóvel
router.get('/search', async (req, res) => {
    await imovelController.findPesquisa(req, res);
})

router.get('/imoveis/result', async (req, res) => {
    var imoveis = await JSON.parse(req.query.data)
    res.locals = { imoveis }
    res.render('ltr/vertical-menu-template-dark/imoveis-busca.ejs')
})

router.get('/meusImoveis/:id', async (req, res) => {
    var imoveis = await imovelController.findAllByUserId(req, res);
    res.locals = { imoveis }
    res.render('ltr/vertical-menu-template-dark/imovel-listagem.ejs')
})

router.get('/busca', async (req, res) => {
    res.render('ltr/vertical-menu-template-dark/imoveis-campos-busca.ejs')
})

// Visualizar Imóvel
router.get('/imovel/detalhes/:id', async (req, res) => {
    var imovel = await imovelController.findById(req, res)
    res.locals = { imovel }
    res.render('ltr/vertical-menu-template-dark/imovel-detalhes.ejs')
})

// Usuários semelhantes
router.get('/users/:id', async (req, res) => {
    var users = await psychographicController.findUsers(req, res)
    res.locals = { users }
    res.render('ltr/vertical-menu-template-dark/usersSemelhantes.ejs')
})

router.post('/interesse', async (req, res) => {
    await interestedController.storeInteressados(req, res)
})

router.post('/removeInteresse', async (req, res) => {
    await interestedController.removeInteresse(req, res)
})

// Avaliar Imóvel
router.post('/avaliar', async (req, res) => {
    await ratingController.store(req, res)
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

    console.log(req)

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
const express = require('express');
const router = express.Router();
const path = require('path');

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


// Crud Imóvel


// ********** POST ************


module.exports = router;
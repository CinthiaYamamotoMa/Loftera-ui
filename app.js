const express = require('express');

const app = express();
const path = require('path');
const routerTemplate = require('./routerTemplate.js');
const router = require('./router.js');

app.listen(9000, () => {
    console.log('Servidor iniciado')
});

app.use('/app-assets', express.static('app-assets'));

app.engine('html', require('ejs').renderFile);

app.set('view engine', 'ejs');

app.use('/', routerTemplate);

app.use('/', router);

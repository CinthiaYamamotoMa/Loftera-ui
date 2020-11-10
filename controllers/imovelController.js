const axios = require('axios').default;

module.exports.findById = async function (req, res){

    axios({
        method: 'get',
        url: `http://localhost:3000/imovel`,
        params: { id: req.query.imovelId}
    })
    .then((retorno) => {
        res.status(200);
        console.log('imovel >>>> ', retorno)
        res.locals = { imovel: retorno.data.retorno }
        res.send(retorno.data.retorno)
    })
    .catch((error) => {
        console.log(error)
    })

},

module.exports.findAll = async function (req, res) {

    var imoveis
    await axios({
        method: 'get',
        url: `http://localhost:3000/imoveis`
    })
    .then((retorno) => {
        res.status(200);
        imoveis = retorno.data.data
        console.log('imoveis >>>> ', retorno.data.data)
    })
    .catch((error) => {
        console.log(error)
    })
    return imoveis

}
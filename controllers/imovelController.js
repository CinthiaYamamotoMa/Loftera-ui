const axios = require('axios').default;

module.exports.findById = async function (req, res) {
    var imovel
    var id = req.params.id
    await axios({
        method: 'get',
        url: `http://localhost:3000/imovel/`,
        params: { id }
    })
        .then((retorno) => {
            res.status(200);
            imovel = { imovel: retorno.data.data }
        })
        .catch((error) => {
            console.log(error)
        })

    return imovel

},

    module.exports.findAllByUserId = async function (req, res) {
        var imoveis
        await axios({
            method: 'get',
            url: `http://localhost:3000/meusImoveis`,
            params: { userId: req.params.id }
        })
            .then((retorno) => {
                res.status(200);
                imoveis = retorno.data.data
            })
            .catch((error) => {
                console.log(error)
            })
        return imoveis

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
            })
            .catch((error) => {
                console.log(error)
            })
        return imoveis

    },

    module.exports.findPesquisa = async function (req, res) {
        var imoveis
        await axios({
            method: 'get',
            url: `http://localhost:3000/search`,
            data: req.query.pesquisa
        })
            .then((retorno) => {
                res.status(200);
                console.log(retorno.data.data)

                res.send(retorno.data.data)
            })
            .catch((error) => {
                console.log(error)
            })

    }
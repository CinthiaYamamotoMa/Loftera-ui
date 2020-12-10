const axios = require('axios').default;

module.exports.findInteressados = async function (req, res) {
    let site = "http://localhost:3000/";
    var interesses;
    await axios({
        method: 'get',
        url: site + 'interested',
        params: { userId: req.params.id }
    })
        .then((retorno) => {
            res.status(200);
            console.log(retorno.data.data.interessados)
            interesses = retorno.data.data.interessados
        })
        .catch((error) => {
            interesses = []
            console.log(error)
        })
    return interesses
}

module.exports.storeInteressados = async function (req, res) {
    let site = "http://localhost:3000/";
    await axios({
        method: 'post',
        url: site + 'interesse',
        params: { userId: req.body.userId,
        productId: req.body.productId }
    })
        .then((retorno) => {
            res.status(200);
            res.json({ success: true });
        })
        .catch((error) => {
            console.log(error)
        })
}

module.exports.removeInteresse = async function (req, res) {
    let site = "http://localhost:3000/";
    await axios({
        method: 'post',
        url: site + 'removeInteresse',
        params: { userId: req.body.userId,
        productId: req.body.productId }
    })
        .then((retorno) => {
            res.status(200);
            res.json({ success: true });
        })
        .catch((error) => {
            console.log(error)
        })
}

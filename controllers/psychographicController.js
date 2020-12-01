const axios = require('axios').default;

module.exports.findAll = async function (req, res) {

    var caracteristicas
    await axios({
        method: 'get',
        url: `http://localhost:3000/caracteristicas`
    })
    .then((retorno) => {
        res.status(200);
        caracteristicas = retorno.data.data
    })
    .catch((error) => {
        console.log(error)
    })
    return caracteristicas

}

module.exports.store = async function (req, res) {
    console.log(req)
    axios({
        method: 'post',
        url: `http://localhost:9000/caracteristicas`,
        data: req.body
    })
        .then((retorno) => {
            res.status(200);
            res.json({ success: true });
        })
        .catch((retorno) => {
            if (retorno.response.status == 500) {
                res.status(500);
                res.json({ success: false });
            } else {
                console.log(retorno)
            }
        });

}

module.exports.findUsers = async function (req, res) {

    var caracteristicas
    await axios({
        method: 'get',
        url: `http://localhost:3000/findUsers`
    })
    .then((retorno) => {
        res.status(200);
        caracteristicas = retorno.data.data
    })
    .catch((error) => {
        console.log(error)
    })
    return caracteristicas
}
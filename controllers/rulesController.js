const axios = require('axios').default;

module.exports.findAll = async function (req, res) {

    var regras
    await axios({
        method: 'get',
        url: `http://localhost:3000/rules`
    })
    .then((retorno) => {
        res.status(200);
        regras = retorno.data.data
    })
    .catch((error) => {
        console.log(error)
    })
    return regras

}
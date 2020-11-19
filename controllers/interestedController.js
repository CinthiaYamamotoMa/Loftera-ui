const axios = require('axios').default;

module.exports.findInteressados = async function (req, res) {
    let site = "http://localhost:3000/";
    var interesses;
    await axios({
        method: 'get',
        url: site + 'interested',
        params: { userId: 1 }
    })
        .then((retorno) => {
            res.status(200);
            interesses = retorno.data.data.interessados
        })
        .catch((error) => {
            interesses = []
            console.log(error)
        })
    return interesses
}

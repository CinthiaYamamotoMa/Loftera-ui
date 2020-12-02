const axios = require('axios').default;

module.exports.store = async function (req, res) {
    axios({
        method: 'post',
        url: `http://localhost:3000/avaliar`,
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
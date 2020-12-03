const axios = require('axios').default;

module.exports = {

    async store(req, res) {
        axios({
            method: 'post',
            url: `http://localhost:3000/users`,
            data: req.body
        })
            .then((retorno) => {
                res.status(200);
                res.json({ success: true });
                // res.send(req.data)
            })
            .catch((retorno) => {
                if (retorno.response.status == 500) {
                    res.status(500);
                    res.json({ success: false });
                } else {
                    console.log(retorno)
                    // var responseObj = {};
                    // responseObj.success = false;
                    // responseObj.paths = [];

                    // retorno.response.data.error.forEach(err => {
                    //     responseObj.paths.push(err.path);
                    // });

                    // res.status(400);
                    // res.json(responseObj);
                }
            });
    },

    async findById(req, res) {
        var user
        await axios({
            method: 'get',
            url: `http://localhost:3000/user`,
            data: { id: req.params.id }
        })
            .then((retorno) => {
                res.status(200);
                user = retorno.data.data
            })
            .catch((error) => {
                user = null
                console.log(error)
            })
            return user
    },

    updateAvatar(req, res) {
        const { filename } = req.file;
        const userId = req.body.userId;
        axios({
            method: 'post',
            url: `http://localhost:3000/avatar`,
            data: {
                userId: userId,
                filename: filename
            }
        })
            .then((retorno) => {
                res.status(200);
                res.send(retorno.data.status)
            })
            .catch((error) => {
                console.log(error)
            })
    },

    deleteAvatar(req, res) {
        const userId = req.body.userId;
        axios({
            method: 'post',
            url: `http://localhost:3000/deleteAvatar`,
            data: {
                userId: userId,
            }
        })
            .then((retorno) => {
                res.status(200);
                res.json(retorno.data.status)
            })
            .catch((error) => {
                console.log(error)
            })
    }
}
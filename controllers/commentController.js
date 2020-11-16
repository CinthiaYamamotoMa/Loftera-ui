const axios = require('axios').default;

module.exports = {

    store(req, res) {
        axios({
            method: 'post',
            url: `http://localhost:3000/comment`,
            data: req.body
        })
            .then((retorno) => {
                res.status(200);
                // console.log('comment >>>>>>> ', retorno)
                // res.json({ success: true });
                res.send(req.data)
            })
            .catch((retorno) => {
                console.log('catch', retorno)
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

}
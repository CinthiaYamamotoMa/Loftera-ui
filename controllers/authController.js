module.exports = {
    ensureAuthenticated: (req, res, next) => {
        console.log('Caiu no ensure >>>>> ', req.isAuthenticated())
        if(req.isAuthenticated()) {
            req.session.isAuthenticated = true
            return next();
        } else {
            res.redirect('/auth-login');
        }
    },
    forwardAuthenticated: (req, res, next) => {
        if(!req.isAuthenticated()) {
            return next();
        }
        res.redirect('/');
    }
}
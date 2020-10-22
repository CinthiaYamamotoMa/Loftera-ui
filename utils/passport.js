const LocalStrategy = require('passport-local').Strategy;
const axios = require('axios');

module.exports = (passport) => {
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        done(null, id);
    });

    passport.use(
        new LocalStrategy({
            usernameField: 'email'
        }, (email, password, done) => {
            axios({
                method: 'post',
                url: `http://localhost:3000/auth`,
                headers: {
                    email: email,
                    password: password
                }
            })
                .then((retorno) => {
                    return done(null, retorno.data.user)
                })
                .catch((retorno) => {
                    return done(null, false, { message: 'Invalid credentials' })
                })
        })
    )
}
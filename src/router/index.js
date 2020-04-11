
const Router = require('express').Router();




Router.get('/', (req, res) => {
    res.render('home', {
        variable: '<h1>Variable</h1>'
    })
})



module.exports = function() {
    return Router;
}
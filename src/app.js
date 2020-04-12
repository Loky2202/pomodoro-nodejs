const express = require('express');
const Router = require('./router/index');
const hbs = require('express-hbs');
const path = require('path');

const app = express();


 
// Use `.hbs` for extensions and find partials in `views/partials`.
app.engine('hbs', hbs.express4({
  partialsDir: __dirname + '/views/partials',
  layoutsDir: __dirname + '/views/layouts'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.static(path.join(__dirname + '/public')))


app.use('/', Router());


app.listen('3000', () =>{
    console.info('Servidor Corriendo');
})
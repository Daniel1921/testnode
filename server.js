var express = require('express');
var app = express();
var hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');






app.get('/', function(req, res) {
    res.render('home', {
        nombre: 'agricola CALI JAMUNDI BUGA TULUA'
    });
});
app.get('/about', function(req, res) {
    res.render('about');
});

app.listen(port, () => console.log(`escuchando en el puerto http://localhost:${port}`));
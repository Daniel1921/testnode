const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-type': 'application/json' });
        let salida = {
            nombre: 'daniel',
            edad: '21',
            url: req.url
        }
        res.write(JSON.stringify(salida));
        // res.write('hola Mundo');
        res.end();
    })
    .listen(8080);

console.log('escuchando el puerto 8080');
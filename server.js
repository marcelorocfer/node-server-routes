const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer(function(request, response) {

    const result = url.parse(request.url, true);

    if (result.pathname == '/artigos' || result.pathname == '/') {
        fs.readFile(__dirname + '/artigos.html', (err, html) => response.end(html)); 
    } else if (result.pathname == '/contato') {
        fs.readFile(__dirname + '/contato.html', (err, html) => response.end(html));
    } else {
        fs.readFile(__dirname + '/erro.html', (err, html) => response.end(html)); 
    }  

});

server.listen(3000, () => console.log('Servidor http.'));
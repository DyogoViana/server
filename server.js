// Servidor HTTP com NodeJS.


const http = require('http');

const server = http.createServer((require, response) => {
    const rotas = [];
    
    rotas['/'] = '<h1>Home</h1>';
    rotas['/contato'] = '<h1>Contato</h1>';
    rotas['semURL'] = '<h1>Erro 404</h1>';

    response.end(rotas[require.url] || rotas['semURL']);
    
});

server.listen(3001, 'localhost', () => {
    console.log("servidor em pé em: http://localhost:3001");
});
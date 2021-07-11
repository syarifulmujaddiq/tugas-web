const http = require('http');

const hostname = '129.213.54.196';
const port = '4002';

const server = http.createServer((request, response) =>{
    console.log(request.url);
    console.log(request.headers);
    console.log(request.headers['accept-language']);
    
    
    if (request.url ==='/'){
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html');
        response.write(`Bahasa = ${request.headers['accept-language']}<br><br>`);
        //response.write(`request : ${request.headers}`);
        response.write('Menu <br><br>');
        response.write("<a href='/makanan'>Menu makanan</a><br>");
        response.write("<a href='/minuman'>Menu minuman</a><br>");
        response.end();
    }else if(request.url ==='/makanan' ) {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html');
        response.write('Ini adalah menu makanan');
        response.end();
    }else if(request.url ==='/minuman'){
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html');
        response.write('Ini adalah menu minuman');
        response.end();
    }else{
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write('Menu lain tidak tersedia');
        response.end();
    }


});

server.listen(port, hostname, () =>{
    console.log(`sever listen ${hostname} ${port}`);
    
});

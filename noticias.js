var http = require('http');

http.createServer(function(req,res) {

    if (req.url=='/noticias') {
        res.end('Noticias');
    } else if (req.url=='/tecnologia') {
        res.end('Noticias de Tecnologia');
    } else if (req.url=='/moda') {
        res.end('Noticias de Moda');
    } else {
        res.end('Noticias Gerais');
    }
   
}).listen(4200);
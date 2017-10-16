var http = require('http');
var url='http://www.elpais.es';
var body='<p>Redirigiendo a <a href="'+url+'">'
         +'El pais'+'</a></p>';


var server= http.createServer(function(req,res){
	//res.end('Que pasa con tigo tio');
	res.setHeader('Location',url);
	res.setHeader('Content-Length',body.length);
	res.setHeader('Content-Type','text/html');
	res.statusCode=312;
	res.end(body);
});
console.log('Server started at port 3000');
server.listen(3000);
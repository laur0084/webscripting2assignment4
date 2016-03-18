/*the hello world command console.log("hello world");*/

/*how to create and callback a server*/
var http = require('http');

var server = http.createServer(function(request, response)){
    response.writeHead(200, {"content-type": "text/plain"});
    response.end("this is a basic server/n");
}

server.listen(7000);



/*how to avoid sycronis process by using asyncronis calls*/
avoid freezing your server

var fs = require('fs');

var content = fs.readFileSync('package.json').toString();
console.log(content);

fs.readFile('package.json', function (err, buf){
    console.log(buf.toString());

});


/*basic TCP demo same as above^^^^^^^^*/
var net = require('net');

server = net.createServer(function(socket)){
    console.log("connection from " + socket.remoteAddress);
    socket.end("this is a basic TCP connection/n");
}

server.listen(7000, "127.0.0.1");


/*using the express framworks...*/


/*creating a simple express application*/

var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.json({ message: 'congrates on the api'});
});

/*if the port is avaible use it otherwise use 8080*/
app.listen(process.env.port || 8080);



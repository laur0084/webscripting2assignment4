var net = require('net');

var client = new net.socket();

client.connect(7000, "127.0.0.1");

client.on('data', function(data){
    console.log('data: ' + data);
    client.destroy();
});

client.on('close', function (){
    console.log('connection terminated');
});

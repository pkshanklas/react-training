var lodash = require('lodash');
var http = require('http');
// var url = require('url');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer(function(req, res){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    
    res.write("random is: " + lodash.random(1,200));
    res.end(' Hello, World!\n');
});
  
    server.listen(port, hostname, function() {
    console.log(`Server running at http://${hostname}:${port}/`);
});
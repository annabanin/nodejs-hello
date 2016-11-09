var http = require('http');
var server = http.createServer(function(req, res) {
    res.writeHead(200, { 'content-type' : 'text/plain' });
    res.write('Hello,');
    res.end('World.');
});
server.listen(3000);

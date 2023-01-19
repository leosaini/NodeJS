let http = require('http');
let server = http.createServer(function(req,res){
    res.write("Server Started ...");
    res.end();
})

server.listen(3000);


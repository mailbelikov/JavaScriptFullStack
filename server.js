const http = require("http");
const url = require("url");

const MyServer = http.createServer(function(req, resp) {
    const pars = url.parse(req.url, true).query;
    const name = pars['name'];
    resp.statusCode = 200;
    resp.setHeader('Content-Type', 'text/plain');
    console.log(name);
    if (name) {
        resp.end("Hello, " + name);
    }
    else {
        resp.end("Hello, Anonyme");
    }    
});

MyServer.listen(8000);

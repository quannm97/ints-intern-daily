const http = require("http");
const app = require('./app.js')
const server = http.createServer(app.handleRequest);

server.listen(3000, function () {
    console.log("server listening");
});

// Dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');

// app object - module scaffolding
const app = {};

// Configuration
app.config = {
    port: 3000,
};

// create Server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`listening to port Number ${app.config.port}`);
    });
};

// Handle Request Response
app.handleReqRes = handleReqRes;

// start server
app.createServer();

// Dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');
const environments = require('./helpers/environments');
const data = require('./lib/data');

// app object - module scaffolding
const app = {};

// // Tesing File system - Write
// data.create('test', 'newFile', { name: 'Bangladesh', language: 'Bangle' }, (err) => {
//     console.log(err);
// });
// // Tesing File system - Read
// data.read('test', 'newFile', (err, result) => {
//     console.log(err, result);
// });
// // Tesing File system - Write
// data.update('test', 'newFile', { name: 'Norway', language: 'Norsk' }, (err) => {
//     console.log(err);
// });

// // Tesing File system - Delete
// data.delete('test', 'newFile', (err) => {
//     console.log(err);
// });

// create Server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(environments.port, () => {
        console.log(`listening to port Number ${environments.port}`);
    });
};

// Handle Request Response
app.handleReqRes = handleReqRes;

// start server
app.createServer();

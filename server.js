const http = require('http');
const app = require('./app');
const { port } = require('./config/config-env');

const server = http.createServer(app);


server.listen(port);
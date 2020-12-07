const http = require('http');
const app = require('./app');

const port = Process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port, () => {
    console.log("server listening to port " + port);
});

console.log('Listening on 3000...');
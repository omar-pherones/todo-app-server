const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const port = process.env.port || 5000;
const middleWares = jsonServer.defaults();
server.use(middleWares);
server.use(router);
server.listen(port);

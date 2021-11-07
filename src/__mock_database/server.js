var jsonServer = require("json-server");
var server = jsonServer.create();
var router = jsonServer.router(require("./database.js")());
var middlewares = jsonServer.defaults();

server.use(middlewares);

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
  }
  // Continue to JSON Server router
  next()
})
server.use(router);
server.listen(3333, function () {
  console.log("JSON Server is running on http://localhost:3333/");
});

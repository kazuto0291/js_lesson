const http =require("http");

const server = http.createServer();

server.on("request", (request, response) => {
  response.writeHead(200,{"Content-Type": "text/plain"});
  response.write("Hello world 2.", "utf-8");
  response.end()
}).listen(3001);
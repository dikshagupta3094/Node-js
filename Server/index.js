const http = require("http");
// const { json } = require("node:stream/consumers");
const port = 3031;
const hostname = "localhost";
const server = http.createServer(function (req, res) {
  if (req.url == "/") {
    res.statusCode = 200;
    res.setHeader("context-type", "text/plain");
    res.end("Home page");
  } else if (req.url == "/about") {
    res.statusCode = 200;
    res.setHeader("context-type", "text/plain");
    res.end("about page");
  } else if (req.url == "/contact") {
    res.statusCode = 200;
    res.setHeader("context-type", "text/plain");
    res.end("Contact page");
  } else if (req.url == "/product") {
    const options = {
      hostname: "fakestoreapi.com",
      path: "/products/1",
      method: "GET",
    };
    const req = http.request(options, (res) => {
      res.on("data ", (data) => {
        res.statusCode = 200; //2xx sucessfully, 5xx something error
        res.setHeader("context-type", "application/json");
        res.end(data.toString());
      });
    });

    req.on("error", (error) => {
      console.log("Error");
    });
    req.end();
  } 
  else {
    res.statusCode = 404;
    res.setHeader("context-type", "text/plain");
    res.end("Page not found");
  }
});
server.listen(port, () => {
  console.log(`The server is running on ${hostname}:${port}`);
});

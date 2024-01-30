const http = require("http");
const port = 3031;
const hostname = "localhost";
const server = http.createServer(function (req, res) {
  if (req.url == "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Home page");
  } else if (req.url == "/about") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("about page");
  } else if (req.url == "/contact") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Contact page");
  } else if (req.url == "/product") {
    const options = {
      hostname: "fakestoreapi.com",
      path: "/products/1",
      method: "GET",
    };
    const productReq = http.request(options, (productRes) => {
      productRes.on("data", (data) => {
        res.statusCode = 200; //2xx sucessfully, 5xx something error
        res.setHeader("Content-Type", "application/json");
        res.end(data.toString());
      });
    });

    productReq.on("error", (error) => {
      console.log("Error");
    });
    productReq.end();
  } 
  else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("Page not found");
  }
});
server.listen(port, () => {
  console.log(`The server is running on ${hostname}:${port}`);
});


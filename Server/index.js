const http = require("http");

const port = 3050;
const hostname = "localhost";
const server = http.createServer(function (req, res) {
  if (req.url == "/") {
    res.statusCode = 200;
    res.setHeader("content-type", "text/plain");
    res.end("Home page");
  } else if (req.url == "/about") {
    res.statusCode = 200;
    res.setHeader("content-type", "text/plain");
    res.end("about page");
  } else if (req.url == "/contact") {
    res.statusCode = 200;
    res.setHeader("content-type", "text/plain");
    res.end("Contact page");
  } else if (req.url == "/product") {
    const options = {
      hostname: "fakestoreapi.com",
      path: "/products/1",
      method: "GET",
    };
    const productreq = http.request(options, (productres) => {
      productres.on("data", (data) => {
        res.statusCode = 200; //2xx sucessfully, 5xx something error
        res.setHeader("content-type", "application/json");//
        res.end(data.toString());
      });
    });

    productreq.on("error", (error) => {
      console.log("Error");
    });
    productreq.end();
  } 
  else {
    res.statusCode = 404;
    res.setHeader("content-type", "text/plain");
    res.end("Page not found");
  }
});
server.listen(port, () => {
  console.log(`The server is running on ${hostname}:${port}`);
});

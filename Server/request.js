const http = require('http');

const options = {
    hostname: 'fakestoreapi.com',
    path:'/products/1',
    method: 'GET'
};
const req = http.request(options,(res)=>{
   res.on("data ",(data)=>{
    console.log(data.toString());
   })
});

req.on("error" ,(error)=>{
    console.log("Error")
});

req.end();


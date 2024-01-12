const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url=='/'){
        res.write('<h1>Hello node js</h1>')
    }
     res.end()
})

server.listen(50001)

console.log('Server is running on port number 50001');
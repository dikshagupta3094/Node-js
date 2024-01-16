const express = require('express')

const app = express();
const port = 4002;
const hostname = 'localhost';
app.get('/',(req,res)=>{
    res.send('<h1>Hello world</h1>')
    
})
app.get('/about', (req,res)=>{
    res.send('<h1>About page</h1>')
})
app.listen(port,()=>{
    console.log(`Server is running at ${hostname}:${port}`);
})
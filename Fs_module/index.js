const fs = require('fs')
//Asysnc way to read file
console.log('READ START');
// fs.readFile('input.txt',function(err,data){
//      if(err){
//         console.log("Error:",err);
//         return err;
//      }
//      else{
//         console.log('Data:',data.toString());
//         console.log('START END');
//         return data
//      }
// })


//Sync way to read file


console.log('OTHER STUFF');
var data = fs.readFileSync('input.txt')
console.log('Data:', data.toString());
console.log('END');

//Write file

fs.writeFile()
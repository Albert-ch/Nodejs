const fs = require('fs')
//                        cb
fs.readFile('./page/a.txt', (err, data)=>{
    console.log(err, data.toString());
})

fs.writeFile('./page/a.txt', "bbb", (err)=>{
    console.log(err)
})
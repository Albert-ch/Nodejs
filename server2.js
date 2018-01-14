const http= require('http')
const fs= require('fs')

const server = http.createServer( (req, res)=> {
    let filename = './page'+req.url
    fs.readFile(filename, (err, data)=>{
        if(err){
            res.write('404')
        }else {
            res.write(data)
        }
        res.end()
    })
} )

server.listen(8888)



const http= require('http')
const querystring= require('querystring')

http.createServer( (req, res)=>{
    let str= '',i=0;
    //post 1G传输大小 过大多次传输
    req.on('data', (data)=>{
        str+=data;
        console.log( `第${i++}次接收数据` , data)
    })

    req.on('end', ()=>{
        console.log( querystring.parse(str) );
    })

} ).listen(8888)
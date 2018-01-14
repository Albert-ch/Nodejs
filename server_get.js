const http= require('http')
const urlLib= require('url')

const server = http.createServer( (req, res)=>{
    let urlObj = urlLib.parse(req.url, true)
    console.log( urlObj );
//      pathname   query
//    http://localhost:8888/index?name=Albert&age=24
//     {
//         protocol: null,
//             slashes: null,
//         auth: null,
//         host: null,
//         port: null,
//         hostname: null,
//         hash: null,
//         search: '?name=Albert&age=24',
//         query: { name: 'Albert', age: '24' },
//         pathname: '/index',
//             path: '/index?name=Albert&age=24',
//         href: '/index?name=Albert&age=24' }

} )
server.listen(8888)
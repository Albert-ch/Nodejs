const  http = require( 'http' )

const server = http.createServer( (req, res) => {
    res.write('abc');
    res.end();
} )

server.listen(8888)
const querystring= require('querystring')
const urlLib= require('url')

console.log( querystring.parse('name=ychen&key=value') )

console.log( urlLib.parse('http://www.baidu.com/index?name=ychen&key=value',true) )
// pathname query

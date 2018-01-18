const http=require('http');
const fs=require('fs');
const querystring=require('querystring');
const urlLib=require('url');

var users={};

var server=http.createServer(function (req, res){
    //解析数据
    var str='';
    req.on('data', function (data){
        str+=data;
    });
    req.on('end', function (){
        var obj=urlLib.parse(req.url, true);

        const url=obj.pathname;
        const get_query=obj.query;
        const post_query=querystring.parse(str);

        if(url=='/api'){   //接口
            //...
            res.end();
        }else{              //文件
            //读取文件
            var file_name='./page'+url;
            fs.readFile(file_name, function (err, data){
                if(err){
                    res.write('404');
                }else{
                    res.write(data);
                }
                res.end();
            });
        }
    });
});

server.listen(8888);

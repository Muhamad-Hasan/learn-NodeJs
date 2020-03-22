const http = require("http");
const fs = require("fs");
// const server = http.createServer(function(req , res){
// res.write("Aun")
// res.end();
// }).listen(8001);

var users = [{id:123 ,  name:'Muhammad'},{id:456 , name : 'Hassan'}];
var courses  = ['computer Programming' ,  'Database'];
const server = http.createServer(function (req , res){
    if(req.url === '/api/courses'){
        res.write(JSON.stringify(courses));
        res.end();
    }
    else if(req.url === '/api/users'){
        res.write(JSON.stringify(users));
        res.end();
    }
    else if(req.url === '/main'){
        fs.readFile("./main.html" , function(err ,  data){
            res.writeHead(200 , {'Content-Type': 'text/html'});
            console.log("error+" +err);
            res.write(data);
            res.end();
        })
        
    }

    else {
        res.write("hello world");
        res.end();
    }
}).listen(8083);
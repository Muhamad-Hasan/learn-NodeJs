const fs = require("fs");

function readFile(srcpath){
    fs.readFile(srcpath , 'utf8' ,function (err , data){
        (err) ? console.log(" read err" +err) : console.log("read "+data)
    });
}
 
function writeFile(savePath , data){
    fs.writeFile(savePath , data , function (err ){
        (err) ? console.log("write err "+err) : console.log("write sucessfully")
    });
}

function appendFile(savePath , data){
    fs.appendFile(savePath , data , function(err ){
       (err) ? console.log("Append err "+err) : console.log("append sucessfully") 
    });
}


//writeFile('./hello.txt', "abcd");
readFile('./hello.txt');
appendFile('./hello.txt', "new text");
readFile('./hello.txt');

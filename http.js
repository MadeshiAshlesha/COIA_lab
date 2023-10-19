const http=require('http')
// http.createServer(function(req,res){
//     res.write("Welcome to server side coding")
//     res.end()
// }).listen(3000, ()=>console.log("server is started"))
// // to run this code , type " localhost:3000 " in browser.
// // and to stop the code in terminal press ctrl+c.

http.createServer(function(req, res){
    res.writeHead(200,{
        // "content-type":"text/plain" // prints <h1>Hello node js</h1>
        "content-type":"text/html"
    })
    res.write("<h1>Hello node js</h1>")
    res.end()
}).listen(4000, ()=>console.log("server is started"))

import http from "http";


// create the server; 
const server = http.createServer((req,res)=>{
    // console.log(req);

    res.write("<h1> Hello from the server !!</h1>")
    

});

server.listen(8000, ()=>{
    console.log(`sever running at the port`);
});
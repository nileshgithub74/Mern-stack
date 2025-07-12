import http from "http";
const port = 8000;

const server = http.createServer((req, res)=>{
    res.write("<h1> Hello from the server </h1");
    if(res.url === '/'){
        res.writeHead(200, "Ok", { 'Content-type': "text/html"});
        res.end("<h1> Home page </h1>");

    } 
     else if(res.url === '/about'){
        res.writeHead(200, "Ok", { 'Content-type': "text/html"});
        res.end("<h1> about  page </h1>");

    } else if(res.url === '/contact'){
        res.writeHead(200, "Ok", { 'Content-type': "text/html"});
        res.end("<h1> conatact  page </h1>");

    }else {
        res.writeHead(404, "Bad", { 'Content-type': "text/html"});
        res.end("<h1> 404 page not found !! </h1>");

    }


});


server.listen(port, ()=>{
    console.log(`server running at the port ${port}`);
});
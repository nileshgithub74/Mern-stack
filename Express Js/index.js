// // const express = require('express');// older way
// // const app = express();


// //--- Es6 concept to import

// import express from "express";
// // import students from "./students.js";
// // import teacher from "./teacher.js";
// const app = express();




// //Basic Route in Express Js
// app.get("/", (req,res)=>{
//     res.send('Welcome to  Express Js basic routing');
// });

// // app.get("/about", (req, res)=>{
// //     res.send("<h3> This is about page</h3>");

// // });



// // // Https methods--------------------------------------------------------------------------------------------------
// // GET  ➡️  Retrive Data,
// // -POST ➡️   Create / Insert Data
// // PUT   ➡️  Completely update Data
// // PATCH  ➡️   partially update data
// // DELETE  ➡️   Delete Data
// // ALL ➡️   any http request method








// // String Pattern Path =----------------------------------
// // app.get("/ab?cd", (req, res)=>{

// //     console.log(`this is run `);

// // });









// // // regex -- regular expression------------------------------

// // app.get(/x/, (req, res)=>{
// //     res.send(`thiis is working if there is x in it`);
// // });

// // app.get(/^\/hello[0-9A-Za-z]+$/, (req, res) => {
// //   res.send("Matched a hello route with letters/numbers");
// // });







// // /// Nested Routes ------------------------------------
// // // app.get("/products/iphone", (req, res)=>{
// // //     res.send(`this code will only run if you prive /provide /products/iphone`);
// // // });










// // // multiple callback----------------------------------------


// // app.get("/double-cb", (req,res, next)=>{
// //     console.log(`first callback function`);
// //     next();
// // }, (req, res)=>{
// //     res.send(`second callback function executes`);
// // });


// // // array of callback---------------------------------




// // const cb1 = (req, res, next)=>{
// //     console.log(`first callback`);
// //     next();
// // };


// // const cb2 = (req, res, next)=>{
// //     console.log(`Second callback`);
// //     next();
// // };


// // const cb3 = (req, res, next)=>{
// //     console.log(`Third callback`);
// //     res.send("array of callback");
// // };

// // app.get("/array-cb", [cb1, cb2, cb3]);










// ///---------------------------------------middleware

// // app.use("/students", students);
// // app.use("/teachers", teacher);




// // route params--------------------------------------------------------

// app.get("/students/delete/:id", (req, res)=>{
//     // res.send(`user deleted`);

//     res.send(req.params.id);
// });

// app.get("/students/products/iphone/:model", (req, res)=>{
//     const {model} = req.params;
//     res.send(model);
// })




// app.listen(3000,()=>{
//     console.log(`server started`);
// });







import express from "express";
import products from "./products.js";
const app = express();



app.get("/products", (req, res)=>{
    res.json(products);

});

app.listen(3000, ()=>{
    console.log(`server started !!`);
})








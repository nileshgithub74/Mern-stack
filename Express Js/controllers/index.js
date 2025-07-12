
import express from "express";
import students from "./students.js"


const app = express();

app.use("/students", students);



app.listen(3000, ()=>{
    console.log(`server started`);
})
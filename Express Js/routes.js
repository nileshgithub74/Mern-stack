// import express from "express";
// const app = express();

// app.get("/students", (req, res)=>{
//     res.send(`All students`);
// });

// app.post("/students", (req, res)=>{
//     res.send(`Add new Students`);
// });

// app.put("/students", (req, res)=>{
//     res.send("Updates students");
// });

// app.delete("/students", (req, res)=>{
//     res.send("Delete Students");
// });

// refactor--------------------------------------------------

// app.route("/listen", "/students", )
// .get((req, res) => res.send(`all students`))
// .post((req, res) => res.send(`add new students`))
// .put((req, res) => res.send(`update students`));



app.listen(8000, ()=>{
    console.log(`Server Running`);
})
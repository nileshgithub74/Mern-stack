import express from "express";
const router = express.Router();



router.get("/all", (req, res)=>{
    console.log(req);
    res.send(`All students`);
});

router.post("/create", (req, res)=>{
    res.send(`Add new Students`);
});

router.put("/update", (req, res)=>{
    res.send("Updates students");
});

router.delete("/delete", (req, res)=>{
    res.send("Delete Students");
});

export default router;

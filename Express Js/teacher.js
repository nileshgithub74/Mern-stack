import express from "express";
const router = express.Router();



router.get("/all", (req, res)=>{
    console.log(req);
    res.send(`All Teacher`);
});

router.post("/create", (req, res)=>{
    res.send(`Add new Teacher`);
});

router.put("/update", (req, res)=>{
    res.send("Updates Teacher");
});

router.delete("/delete", (req, res)=>{
    res.send("Delete Teacher");
});

export default router;

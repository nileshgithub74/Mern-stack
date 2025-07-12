import express from "express";

import {allstudents, updateStudents, newstudents, deleteStudents} from "./student.js";

const router = express.Router();

router.get("/all", allstudents);
router.post("/create", newstudents);

router.put("/update", updateStudents);
router.delete("/delete", deleteStudents);

export default router;

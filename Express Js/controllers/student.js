import express from "express";

const allstudents = (req, res) =>{
    res.send(`All students`);
};

const newstudents = (req, res) =>{
    res.send(` New  students`);
};
const updateStudents = (req, res) =>{
    res.send(`Update students`);
};

const deleteStudents = (req, res)=>{
    res.send('Delted the students from the Database');
}


export {allstudents, updateStudents, newstudents, deleteStudents};
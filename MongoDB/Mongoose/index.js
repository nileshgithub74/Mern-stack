import express from "express";
import connectDB from './db/connectDB.js';
import {createUser} from "./Model/user.js";
const app = express();

const port = process.env.PORT || 8000;

const DATABASE_URL =  process.env.DATABASE_URL ||  'mongodb://127.0.0.1:27017/movies';

connectDB(DATABASE_URL);

createUser();

app.listen(port, ()=>{
    console.log(`server running on the port ${port}`);
});
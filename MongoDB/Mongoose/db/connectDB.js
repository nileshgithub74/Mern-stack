import mongoose from "mongoose";

const connectDB = async(DataBase_URL)=> {
    try{
        await mongoose.connect(DataBase_URL);
        console.log(`DataBase Connected SuccessFully`);

    }catch(error){
        console.log(error);

    }
}

export default connectDB;
import mongoose from "mongoose";

const connectDB = async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB}/constant`)
        console.log('Mongodb connected')
    } catch (error) {
        console.log("error",error)
    }
}

export default connectDB
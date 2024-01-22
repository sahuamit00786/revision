import dotenv from 'dotenv'
import express from "express";
import connectDB from './db/index.js';
const app = express()
dotenv.config({path:'../.env'})

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`)
})

connectDB()

//  first approach for connecting mongodb
// ( async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB}/constant`)

//         app.listen(process.env.PORT,()=>{
//             console.log(`server is running at port ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.error("Error:",error)
//     }
// })()
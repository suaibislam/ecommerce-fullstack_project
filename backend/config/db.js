import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://e-commerce-greatstack:suaibislam123@cluster0.yg5u2.mongodb.net/food-dev').then(()=>console.log("DB Connected"));
}
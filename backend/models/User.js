import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fio: { type:String, required:true},
    login:{ type:String, required:true, unique:true },
    password: { type:String, required: true }
})

export default mongoose.model('User', userSchema)
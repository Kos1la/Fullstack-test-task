import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
    bankAccountNumber: {type: Number,required:true},
    surname: {type:String,required:true},
    name: {type:String,required:true},
    middleName: {type:String,required:true},
    birthDate: {type:String,required:true},
    INN: {type:Number,required:true},
    responsiblePerson: {type:String,required:true},
    status: {type:String, default: "Не в работе"}
})

export default mongoose.model('Client',clientSchema)
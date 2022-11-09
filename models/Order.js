import mongoose from 'mongoose'



const orderSchema = new mongoose.Schema({
    customer:{
        type:String,
        maxLength: 50,
        required:true
    },
    address:{
        type:String,
        maxLength: 200,
        required:true
    },
    total:{
        type:Number,
        required:true
    },
    status:{
        type:Number,
        default:0,
    },
    method:{
        type:Number,
        required:true
    },
   
},{timestamps:true})

export default mongoose.models.Order || mongoose.model("Order", orderSchema);

import mongoose from 'mongoose';  
import PracticalModel from "../model/Practical.js"
import userModel from './User.js';
const enrollSchema=mongoose.Schema({  
    practicalId:{  
        type:mongoose.Schema.Types.ObjectId,  
        ref:"Practical",  
        required:true  
    },  
    studentId:{  
        type:mongoose.Schema.Types.ObjectId,  
        ref:"User",  
        required:true  
    }  
  
})  
  
const enrollModel=mongoose.model("Enroll",enrollSchema);  
  
export default enrollModel;
 
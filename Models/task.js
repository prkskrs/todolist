import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    date: {
        type: Date,
        default: Date.now
    }
},
{ timestamps: true }
)

const Task = mongoose.model("Task",taskSchema);

export default Task;
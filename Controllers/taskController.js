import bigPromise from "../Middlewares/bigPromise.js";
import Task from "../Models/task.js"

export const addTask = bigPromise(async(req,res,next)=>{
    const {content}=req.body;
    if (!content){
        return res.status(400).json({
            success:false,
            message:"content is required to save"
        })
    }

    const task = await Task.create({
        content
    })

    res.status(200).json({
        success:true,
        message:"Task Added Successfully!",task
    })
})

export const allTask = bigPromise(async(req,res,next)=>{

    const allTask = await Task.find({})
    console.log(allTask)

    res.status(200).json({
        data:allTask
    })
})

export const deleteTaskById = bigPromise(async(req,res,next)=>{

    const task = await Task.findById(req.params.id)

    if(!task){
        res.status(400).json({
            success:false,
            message:"No tasks exist!"
        })
    }
    console.log(task)

    await task.remove()


    console.log(task)
    res.status(200).json({
        success:true,
        message:"Task deleted successfully !"
    })
})


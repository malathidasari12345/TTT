const TODO = require("../models/task")

const newtask = async (req , res) =>{
    try{
        console.log(req.body)
        const {title, description} = req.body

        await TODO.create({
            title,
            description,
        });
        res.status(200).json({
            success :true,
            message : "Task Added Successfully"
        })
    }catch(err){
        console.log(err)
    }
}

// to get all tasks 
const gettasks = async (req, res) => {
    try {
        const tasks = await TODO.find({}).select('title description isCompleted') 
        // no tasks available
        if (tasks.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No tasks found."
            });
        }
        // if tasks available
        res.status(200).json({
            success: true,
            TotalTasks: tasks.length,
            tasks
        });
    } catch (err) {
        console.log(err)
    }
};

// update the task by using _id generated by mongodb...
const updatetask = async (req, res) => {
    try {
        const task = await TODO.findById(req.params.id);
        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found",
            });
        }
        task.iscompleted = !task.iscompleted;
        task.title = req.body.title;
        task.description = req.body.description
        await task.save();

        res.status(200).json({
            success: true,
            message: "Task Updated Successfully.",
            task 
        });
    } catch (err) {
        console.log(err)
    }
};
// delete a task by id
const deletetask = async (req, res) => {
    try {
        const task = await TODO.findById(req.params.id);
// if task not found
        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found",
            });
        }
        await task.deleteOne();
        res.status(200).json({
            success: true,
            message: "Task deleted Successfully",
        });
    } catch (err) {
       console.log(err)
    }
};
module. exports = {
    newtask,
    gettasks,
    updatetask,
    deletetask

}
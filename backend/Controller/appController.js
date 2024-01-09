//Init Json data
const data = require('../JsonData/db.json');
//Inint tasks
const tasks = data.tasks;
//init uuid
const uuid = require('uuid');
//Getting all data
const getAll = async (req, res) => {
       await res.json(tasks);
}

//Getting All data By id
const getIndividual = async (req, res) => {
       const foundtasks = tasks.some((task) => (task.id === parseInt(req.params.id)));
       if(foundtasks){
              await res.json(tasks.filter((task) => task.id === parseInt(req.params.id)));
       }else{
              await res.status(400).json({msg: `No tasks found with the id of ${req.params.id}`});
       }
}

//Adding new Data
const AddData = async (req, res) => {
       const newTask = {
        id: uuid.v4(),
        TaskN: req.body.TaskN,
        Task: req.body.Task,
        AddDate: req.body.AddDate,
        Tasktime: req.body.Tasktime,
        Status: false,
        FilterMode: ""
       }

       tasks.push(newTask);
       
       await res.json({Msg: "New task has been added", tasks});
}

//Updating current data
const UpData = async (req, res) => {
       const foundtasks = tasks.some((task) => (task.id === parseInt(req.params.id)));

       if(foundtasks){
              const updateTasks = req.body;
              tasks.forEach((task) => {
                     if(task.id === parseInt(req.params.id)){
                            task.TaskN = updateTasks.TaskN ? updateTasks.TaskN : task.TaskN;
                            task.Task = updateTasks.Task ? updateTasks.Task : task.Task;
                            task.AddDate = updateTasks.AddDate ? updateTasks.AddDate : task.AddDate;
                            task.Tasktime = updateTasks.Tasktime ? updateTasks.Tasktime : task.Tasktime
                            
                            res.json({
                                   msg: "Task is updated",
                                   task
                            })
                     }
              });
       } else {
              await res.status(400).json({msg: `No tasks found with the id of ${req.params.id}`});
       }
}

//Deleting Data
const RemData = async (req, res) => {
       const foundtasks = tasks.some((task) => (task.id === parseInt(req.params.id)));

       if(foundtasks){
              await res.json({
                     Msg: "Task has been removed",
                     tasks: tasks.filter((task) => task.id !== parseInt(req.params.id))
              });
       }else{
              await res.status(400).json({msg: `No tasks found with the id of ${req.params.id}`});
       }
}

module.exports = {
    getAll,
    getIndividual,
    AddData,
    UpData,
    RemData
}
// mongodb+srv://paras:dbUserPassword@cluster0.hzuwgaa.mongodb.net/todos      

const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://paras:dbUserPassword@cluster0.hzuwgaa.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title: String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model('todos',todoSchema);
module.exports = {
    todo : todo
}
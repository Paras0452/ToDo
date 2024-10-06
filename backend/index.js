const express = require("express")
const {createTodo, updateTodo} = require("./types")
const {todo} = require("./db.js")
const app = express()

app.use(express.json())

app.get("/todos",function(req,res){

})

app.put("/completed", function(req,res){
const updatePayload = req.body;
const parsedPayload = updateTodo.safeParse(updatePayload);
if(!parsedPayload.success){
    res.status(411).json({
        msg : "Ypu sent the wrong inputs",
    })
    return
}


})

app.post("/todo",async function(req,res){
const createPayload = req.body;
const parsedPayload = createTodo.safeParse(createPayload);
if(!parsedPayload.success){
    res.status(411).json({
        msg : "You sent the wrong inputs",
    })
    return
}
await todo.create({
    title : createPayload.title,
    description : createPayload.description,

})
res.json({
    msg : "ToDo created"
})
})
var express = require('express');
var router = express.Router();
var todoList = require("../database/model/todoList")

/* GET home page. */
router.get('/todo', function(req, res, next) {
  todoList.find({}).then((data)=>{
      res.json({
         code:200,
         data
      })
  })
});
router.patch('/todo/:id',(req,res)=>{
    let id = req.params.id;
    let isDone = req.body.isDone == 1?true:false;
    let title = req.body.title;
   todoList.update({_id:id},{isDone,title}).then(data=>{
       res.json({
            code:200,
            msg:'success'
       })
   })

});
router.delete('/todo/:id',(req,res)=>{
    let id = req.params.id;
    todoList.remove({_id:id}).then(data=>{
        res.json({
            code:200,
            msg:'success'
        })
    })
});
router.post("/todo",(req,res)=>{
    let todo = req.body;
    todo.isDone = false;
    todoList.create(todo).then(data=>{
        res.json({
            code:200,
            msg:"success"
        })
    })
})

module.exports = router;

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todoList = new Schema({
    title:  String,
    isDone:Boolean,
});

module.exports = mongoose.model("todoList",todoList,"todoList");
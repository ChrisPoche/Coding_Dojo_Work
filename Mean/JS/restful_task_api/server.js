var express = require('express');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restful_task_api');

var TaskSchema = new mongoose.Schema({
    title : {type:String},
    description : {type:String},
    completed : {type:Boolean,default:false}
},{timestamps:true});
mongoose.model('Task',TaskSchema);
var Task = mongoose.model('Task');

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/',function(req,res){              // SHOW ALL TASKS
    Task.find({}, function(err, task){
        console.log("Task",task);
        res.json({task : task});
    })
})
app.post('/',function(req,res){  // ADD NEW TASK
        var task = new Task({title:req.body.title,description:req.body.description,completed:req.body.completed});
        task.save(function(err){
            if(err){
                console.log('Error Occurred');
            }
            else{
                console.log("SUCCESS!!!")
                res.redirect('/')
            }
        })
    })
app.delete('/:title',function(req, res){        // REMOVE SPECIFIC TASK
    Task.findOne({title:req.params.title}).remove().exec(function(err){
        if(err){
            console.log('Error Occurred');
        }
        else{
            res.redirect('/');
        }
    });
});
app.put('/:title',function(req, res){        // UPDATE SPECIFIC TASK
    Task.findOneAndUpdate({title:req.params.title},{title:req.body.title,description:req.body.description,completed:req.body.completed},function(err){
        if(err){
            console.log('Error Occurred');
        }
        else{
            res.redirect('/');
        }
    });
});
app.get('/:title', function(req, res){          // SHOW SPECIFIC TASK
    Task.find({title : req.params.title},function(err, task){
        res.json({task:task})
    })
})
app.listen(8000, function() {        
    console.log("listening on port 8000");
});
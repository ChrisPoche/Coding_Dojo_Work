var express = require('express');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/1955_api');

var Schema = mongoose.Schema;


var PeopleSchema = new mongoose.Schema({
    name : {type:String},
});
mongoose.model('People',PeopleSchema);
var People = mongoose.model('People');

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/',function(req,res){        
    People.find({}, function(err, people){
        console.log("People",people);
        res.json({people : people});
    })
})
app.get('/new/:name',function(req,res){  
    People.find({},function(err,people){
        for(x in people){
            console.log(req.params.name,people[x].name);
            if(req.params.name != people[x].name && x == people.length-1){
                var person = new People({name:req.params.name});
                person.save(function(err){
                    if(err){
                        
                        console.log('Error Occurred');
                    }
                    else{
                        res.redirect('/')
                    }
                })
            }
            else if(req.params.name == people[x].name){
                return res.redirect('/')
            }
        }
    })
});      
app.get('/remove/:name',function(req, res){
    People.findOne({name:req.params.name}).remove().exec(function(err){
        if(err){
            console.log('Error Occurred');
        }
        else{
            res.redirect('/');
        }
    });
});
app.get('/:name', function(req, res){
    People.find({name : req.params.name},function(err, person){
        res.json({person:person})
    })
})
app.listen(8000, function() {
    console.log("listening on port 8000");
});
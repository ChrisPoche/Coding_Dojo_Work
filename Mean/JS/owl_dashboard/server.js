var express = require('express');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose_dash');
var OwlSchema = new mongoose.Schema({
    name : {type:String, required : true},
    species : {type:String, required : true},
    accessory : {type:String,required : true}
},{timestamps:true});
mongoose.model('Owl',OwlSchema);
var Owl = mongoose.model('Owl');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var path = require('path');
app.set('views', path.join(__dirname,'/views'));
app.set('view engine', 'ejs');

app.get('/',function(req,res){          // GET INDEX DISPLAYING ALL OWLS
    Owl.find({},function(err, owls){
        console.log(owls);
        res.render('index', {owls : owls});
    })
})
app.get('/owls/new', function(req, res) {       // GET CREATE DISPLAYING FORM TO ADD NEW OWL
    res.render('create');
})
app.get('/owls/:id', function(req, res) {       // GET SHOW DISPLAYING OWL WITH SPECIFIC ID
    Owl.find({_id:req.params.id}, function(err, owl){
        res.render('show',{owl:owl[0]});
    })
})
app.get('/owls/edit/:id', function(req, res) {       // GET EDIT DISPLAYING FORM TO UPDATE OWL WITH SPECIFIC ID
    Owl.find({_id:req.params.id},function(err,owl){
        res.render('edit',{owl:owl[0]});
    })
    })
app.post('/owls', function(req, res) {      // POST CREATE NEW OWL
    console.log("POST DATA", req.body);
    var owl = new Owl({name:req.body.name, species: req.body.species, accessory: req.body.accessory});
    owl.save(function(err){
        if(err){
            console.log('ERRORS',user.errors);
            res.render('create',{errors:user.errors});
        }
        else{
            res.redirect('/');
        }
    })
})
app.post('/owls/:id', function(req, res) {      // POST UPDATES FOR SPECIFIC OWL
    console.log("POST DATA", req.body);
    Owl.update({_id:req.params.id},{$set: {name:req.body.name, species: req.body.species, accessory: req.body.accessory}}, function(err, owl){
        res.redirect(`/owls/${req.params.id}`);
    })
})
app.post('/owls/destroy/:id', function(req, res) {      // POST DESTROY BY SPECIFIC OWL ID
    Owl.find({_id:req.params.id}).remove(function(){
    res.redirect('/');
    })
})
app.listen(8000, function() {
    console.log("listening on port 8000");
});
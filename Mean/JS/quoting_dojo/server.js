var express = require('express');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quoting_dojo');
var UserSchema = new mongoose.Schema({
    name : {type:String, required: true, minlength:2},
    quote : {type:String,required: true}
})
mongoose.model('User',UserSchema);
var User = mongoose.model('User');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var path = require('path');
app.set('views', path.join(__dirname,'/views'));
app.set('view engine', 'ejs');

app.get('/',function(req,res){
    res.render('index');
})
app.get('/quotes', function(req, res) {
    User.find({}, function(err, users){
        res.render('quotes',{users:users});
    })
})
app.post('/quotes', function(req, res) {
    console.log("POST DATA", req.body);
    var user = new User({name:req.body.name, quote: req.body.quote});
    user.save(function(err){
        if(err){
            console.log('ERRORS',user.errors);
            res.render('index',{errors:user.errors});
        }
        else if(req.body.submit=='Add my quote!'){
            console.log("RE-RENDERING");
            res.redirect('/');
        }
        else if(req.body.submit=='Skip to quotes!'){
            console.log("REDIRECT");
            res.redirect('/quotes');
        }
    })
})
app.listen(8000, function() {
    console.log("listening on port 8000");
});
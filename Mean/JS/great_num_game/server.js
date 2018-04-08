var express = require('express');
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({secret:'password_is_password'}));
app.set('views', __dirname+'/views');
app.set('view engine', 'ejs');
app.get('/', function(req, res){
    var message = "";
    if(!req.session.answer){
        req.session.answer = (Math.floor(100*Math.random())+1);
    }
    if(req.session.guess < req.session.answer && req.session.noguess == false){
        var message = "Too low!";
    }
    else if(req.session.guess > req.session.answer && req.session.noguess == false){
        var message = "Too high!";
    }
    else if(req.session.guess == req.session.answer && req.session.noguess == false){
        var message = req.session.answer + " was the number!";
    }
    var answer = req.session.answer;
    res.render('index', {'answer' : answer, "message" : message});
});
app.post('/guess', function(req,res){
    req.session.guess = req.body.guess;
    req.session.noguess = false;
    res.redirect('/');
});
app.post('/playagain', function(req,res){
    req.session.answer = (Math.floor(100*Math.random())+1);
    req.session.noguess = true;
    res.redirect('/');
});
app.listen(8000, function(){
});
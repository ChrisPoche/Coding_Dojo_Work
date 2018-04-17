var express = require('express');
var app = express();
var body_parser = require('body-parser');
var session = require('express-session');
app.use(session({secret: 'password_is_taco'}));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.get('/', function(req, res){
    if(req.session.count == 0){
        req.session.count = 1;
    }
    else{
        req.session.count++;
    }
    var count = req.session.count;
    console.log('Count',count);
    res.render('index', {'count_total':count});
})
app.post('/plus2', function(req, res){
    req.session.count ++;
    var count = req.session.count;
    res.redirect('/');
});
app.post('/reset', function(req, res){
    req.session.count = 0;
    var count = req.session.count;
    res.redirect('/');
});
app.listen(8000,function(){
    console.log("listening on port 8000");
});
var express = require('express');
var app = express();
var body_parser = require('body-parser');
app.use(body_parser.urlencoded({extended:true}));
app.set('views',__dirname+'/views');
app.set('view engine','ejs');
app.get('/', function(req, res){
    res.render('index');
})
app.post('/post', function(req, res){
    var name = req.body.name;
    var dojo = req.body.dojo;
    var favlang = req.body.favlang;
    var comment = req.body.comment;
    postdata = {
        'name' : name,
        'dojo' : dojo,
        'favlang' : favlang,
        'comment' : comment
    }
    res.redirect('/result');
})
app.get('/result', function(req, res){
    var results = postdata;
    res.render('result', {'forminfo' : results});
})
app.listen(8000,function(){
    console.log("listening on port 8000");
});
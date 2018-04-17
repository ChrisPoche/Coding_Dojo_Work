var express = require('express');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/message_board');

var Schema = mongoose.Schema;


var MessageSchema = new mongoose.Schema({
    name : {type:String, required:true, minlength:2},
    text : {type:String, required:true},
    comments : [{type: Schema.Types.ObjectId, ref:'Comment'}]
},{timestamps:true});
var CommentSchema = new mongoose.Schema({
    _message: {type: Schema.Types.ObjectId, ref:'Message'},
    name : {type:String, required:true, minlength:2},
    text : {type:String, required:true}
},{timestamps:true});

mongoose.model('Message',MessageSchema);
mongoose.model('Comment',CommentSchema);

var Message = mongoose.model('Message');
var Comment = mongoose.model('Comment');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var path = require('path');
app.set('views', path.join(__dirname,'/views'));
app.set('view engine', 'ejs');

app.get('/',function(req,res){        
    Message.find({})
        .populate('comments')
        .exec(function(err, messages){
            console.log("Messages",messages);
            res.render('index', {messages : messages});
        })
})
app.post('/new', function(req, res) {      // POST CREATE NEW MESSAGE
    console.log("POST DATA", req.body);
    var message = new Message({name:req.body.name, text: req.body.message});
    message.save(function(err){
        if(err){
            console.log('ERRORS',user.errors);
            res.render('index',{errors:user.errors});
        }
        else{
            res.redirect('/');
        }
    })
})
app.post('/new_comment/:id', function(req, res) {      // POST CREATE NEW COMMENT
    console.log("POST DATA", req.body);
    Message.findById({_id:req.params.id},function(err,message){
        console.log("Message *****",message.comments)
        var comment = new Comment({name:req.body.name, text: req.body.comment});
        comment._message = message._id;
        var commentArr = message.comments 
        commentArr.push(comment);
        comment.save(function(err){
            message.save(function(err){
                if(err){
                    console.log('ERRORS',user.errors);
                    res.render('index',{errors:user.errors});
                }
                else{
                    res.redirect('/');
                }
            })
        })
    })
})
app.listen(8000, function() {
    console.log("listening on port 8000");
});
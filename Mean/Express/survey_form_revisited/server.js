var express = require('express');
var app = express();
app.set('views',__dirname+'/views');
app.set('view engine','ejs');
app.get('/', function(req, res){
    res.render('index');
})
var server = app.listen(8000,function(){
    console.log("listening on port 8000");
})
var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket){
    console.log("Client/socket is connected!");
    console.log("Client/socket id is: ", socket.id);
    socket.on('posting_form',function(formdata){
        forminfo = [];
        formdata = formdata.formdata;
        for(piece in formdata){
            let name = formdata[piece].name;
            let value = formdata[piece].value;
            let object = ` ${name} : ${value}`
            forminfo.push(object);
        }
        console.log("The form was submitted");
        var randnum = (Math.floor(Math.random()*1000))+1;
        socket.emit('updated_message', {forminfo:forminfo,randnum:randnum});
    })
})
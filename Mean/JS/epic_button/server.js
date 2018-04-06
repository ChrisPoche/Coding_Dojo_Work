var express = require('express');
var app = express();
app.set('views', __dirname+'/views');
app.set('view engine', 'ejs');
app.get('/',function(req,res){
    if(!count){
        var count = 0;
    }
    res.render('index', {count:count});
})
var server = app.listen(8000, function(){
    console.log('listening on port 8000');
});
var io = require('socket.io').listen(server);
var count = 0;
io.sockets.on('connection', function(socket){
    console.log('Client/socket is connected!');
    console.log('Client/socket id is:', socket.id);
    socket.on('startup_count_update',function(){
        count = count;
        console.log("COUNT UPDATE",count)
        socket.emit('count_update',{count:count});
    })
    socket.on('epic_button_clicked',function(){
        count ++;
        console.log('COUNT',count);
        io.emit('count_update',{count:count});
    })  
    socket.on('reset_button_clicked',function(){
        count = 0;
        console.log('COUNT',count);
        io.emit('count_update',{count:count});
    })  
})
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended : true}));

var path = require('path');
app.use(express.static(path.join( __dirname,'/hello/dist')));
app.set('view', path.join(__dirname,'/hello/dist'));

require('./server/config/mongoose.js');
var route_setter = require('./server/config/routes.js');
route_setter(app);

app.listen(8000, function() {        
    console.log("listening on port 8000");
});
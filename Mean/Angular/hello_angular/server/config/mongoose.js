var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');
mongoose.connect('mongodb://localhost/restful_task_api');
var models_path = path.join(__dirname,'./../models');
fs.readdirSync(models_path).forEach(function(elem){
    if(elem.indexOf('.js') >= 0){
        require(models_path + '/' + elem);
    }
});
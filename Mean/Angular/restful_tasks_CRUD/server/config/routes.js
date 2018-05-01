var tasks = require('../controllers/tasks.js');
module.exports = function(app){
    app.get('/',function(req,res){              // RENDER INDEX
        tasks.index(req,res);
        })
    app.post('/',function(req,res){  
        tasks.create(req,res);
    })
    app.get('/tasks', function(req, res){          // SHOW ALL TASKS (READ)
        tasks.findAll(req,res);
    })
    app.get('/:id', function(req, res){          // SHOW SPECIFIC TASK (READ)
        tasks.findOne(req,res);
    })
    app.put('/:id',function(req, res){        // UPDATE SPECIFIC TASK
        tasks.update(req,res);
    });
    app.delete('/:id',function(req, res){        // DESTROY SPECIFIC TASK
        tasks.delete(req,res);
    });
}
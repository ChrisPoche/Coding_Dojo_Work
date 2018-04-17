var tasks = require('../controllers/tasks.js');
module.exports = function(app){
    app.get('/',function(req,res){              // RENDER INDEX
        tasks.index(req,res);
        })
    app.get('/:title', function(req, res){          // SHOW SPECIFIC TASK (READ)
        tasks.findOne(req,res);
    })
    app.get('/:title', function(req, res){          // SHOW ALL TASKS (READ)
        tasks.findAll(req,res);
    })
    app.post('/',function(req,res){  // CREATE NEW TASK
        tasks.create(req,res);
    })
    app.put('/:title',function(req, res){        // UPDATE SPECIFIC TASK
        tasks.update(req,res);
    });
    app.delete('/:title',function(req, res){        // DESTROY SPECIFIC TASK
        tasks.delete(req,res);
    });
}
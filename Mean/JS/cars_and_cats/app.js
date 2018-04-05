var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request, response){
    console.log('Client Request URL:', request.url);
    if(request.url === '/cars'){
        fs.readFile('views/cars.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type':'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/stylesheets/style.css'){
        fs.readFile('stylesheets/style.css','utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/css'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/images/orange.jpg'){
        fs.readFile('images/orange.jpg', function(errors, contents){
            response.writeHead(200, {'Content-Type':'text/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/images/silver.jpg'){
        fs.readFile('images/silver.jpg', function(errors, contents){
            response.writeHead(200, {'Content-Type':'text/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/images/red.jpeg'){
        fs.readFile('images/red.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-Type':'text/jpeg'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/cats'){
        fs.readFile('views/cats.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type':'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/images/drink.jpeg'){
        fs.readFile('images/drink.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-Type':'text/jpeg'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/images/hat.jpg'){
        fs.readFile('images/hat.jpg', function(errors, contents){
            response.writeHead(200, {'Content-Type':'text/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/images/entourage.jpg'){
        fs.readFile('images/entourage.jpg', function(errors, contents){
            response.writeHead(200, {'Content-Type':'text/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/cars/new'){
        fs.readFile('views/carsform.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type':'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else{
        response.end('URL requested is not available');
    }
});
server.listen(7077);
console.log('Running on port 7077');
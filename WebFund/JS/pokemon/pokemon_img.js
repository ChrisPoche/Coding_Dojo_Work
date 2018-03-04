$(document).ready(function(){
    for(var i=1; i<152; i++){
        console.log('Hello');
        $('body').append(`<img id="pokemonNum${i}" src="http://pokeapi.co/media/img/${i}.png">`);
    };
});
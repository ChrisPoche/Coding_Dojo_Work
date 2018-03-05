$(document).ready(function(){
    for(var i=1; i<152; i++){
        $('#field').append(`<img id="${i}" class="pokemon" src="http://pokeapi.co/media/img/${i}.png" alt-src="pokeball.png">`);
    };
    var proxy = 'https://cors-anywhere.herokuapp.com/';
    var html = 'pokeapi.co/api/v2/pokemon/';
    console.log('API',proxy + html);
   
        var dispCount = 0;
        var i = "";
        var recall = "";
        var pokedexOff = '';
        $('.pokemon').click(this, function(){
            num = ($(this).attr('id')); 
            $.get(proxy+html+num, function(res){
                var pokeType = res.types[0].type.name;
                console.log(res);
                if(dispCount === 0){
                    i = res.id;
                    recall = `http://pokeapi.co/media/img/${i}.png`;
                    $(`#${res.id}`).attr('src','pokeball.png');
                    pokedexOff = $('#pokedex').attr('src');
                    $('#pokedex').attr('src',$('#pokedex').attr('alt-src'));
                    $('#pokedexText').append(`<p>${res.name}&nbsp;&nbsp;&nbsp;&nbsp;#${res.id}</p>`);
                    $('#pokedexText').append(`<p>${pokeType}</p>`);
                    $('body').append(`<div id="pokedexDisp"><img class="pokemon pokemonDisplay" src="http://pokeapi.co/media/img/${res.id}.png"></div>`);
                    dispCount++;
                    return i;
                }
                else{
                    $(`#${i}`).attr('src', `http://pokeapi.co/media/img/${i}.png`);
                    $('#pokedex').attr('src',pokedexOff);
                    var recall = `http://pokeapi.co/media/img/${res.id}.png`;
                    $(`#${res.id}`).attr('src','pokeball.png');
                    var j = res.id;
                    if(i===j){
                        $(`#${i}`).attr('src', `http://pokeapi.co/media/img/${i}.png`);
                        $('div#pokedexText').empty();
                        $('div#pokedexDisp').empty();
                        $('#pokedex').attr('src',pokedexOff);
                        i = j;
                        dispCount--;
                    }
                    else{
                        $('div#pokedexText').html(`<p>${res.name} #${res.id}</p>`);
                        $('#pokedexText').append(`<p>${pokeType}</p>`);
                        $('div#pokedexDisp').html(`<img class="pokemon pokemonDisplay" src="http://pokeapi.co/media/img/${res.id}.png">`);
                        $('#pokedex').attr('src',$('#pokedex').attr('alt-src'));
                        i = j;
                    } 
                }
            });
        });
        
        
    }, 'json');


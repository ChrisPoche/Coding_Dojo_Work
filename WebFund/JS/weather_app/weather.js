$(document).ready(function() {
    $('form').submit(function() {
        var url = 'http://api.openweathermap.org/data/2.5/weather?q=';
        var city = $('#city').val();
        var apiKey = '&&appid=a3fa8157650d6ad9a4a1abb22e68e4bb';
        var tempF = "";
        $.get(url+city+apiKey, function(res) {
            $('#result').empty();
            var tempK = res.main.temp;
            tempF = Math.floor((1.8*(tempK-273.15))+32);
            $('#result').append(`<h1>${$('#city').val()}</h1><br><p>Temperature: ${tempF}˚</p>`);
        }, 'json');
        return false;
    });
});

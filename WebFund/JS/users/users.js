$(document).ready(function(){
    $('input').click(function(){
        var value = $(this).attr('value');
        $(this).attr('value',null);
    });
    console.log($('input.firstname').attr('value'));
    $('form').submit(function(){
        $('table').append(`<tr><td>${$('.firstname').val()}</td><td>${$('.lastname').val()}</td><td>${$('.email').val()}</td><td>${$('.phone').val()}</td></tr>`)
        console.log($('input.firstname').val);
        $('.button').attr('value','Add User');
        return false;
    });
});
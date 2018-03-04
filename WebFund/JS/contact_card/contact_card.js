var i = 1;
$(document).ready(function(){
    $('textarea').focusin('click',function(){
        $('textarea').html(null);
    });
    $('textarea').focusout(function(){
        $('textarea').html('Enter description here');
    });
    $('form').submit(function(){
        $('#cardBox').append(`<div id="${i}" front="true" class="cards"></div>`);
        $(`#${i}`).prepend(`<h2>${$('#firstname').val()} ${$('#lastname').val()}</h2>`);
        $(`#${i}`).append('<br><br><p>Click for description!</p>');
        $(`#${i}`).prepend(`<h3 style="display: none;">${$('#description').val()}</h3>`);
        $('input').val(null);
        $('#button').attr('value','Add User');
        $('textarea').val(null);
        i++;
        return false;
    });
    $('#cardBox').on('click','.cards',function(){
        var x = $(this).attr('id');
        console.log($(`#${x} h3`).css('display'));
        console.log($(this).attr('id'));
        if($(this).attr('front') == 'true'){
            $(`#${x} h3`).css('display','inherit');
            $(`#${x} p`).css('display','none');
            $(`#${x} h2`).css('display','none');
            $(this).attr('front','false');
            // event.stopPropagation();
        }
        else{
            $(`#${x} p`).css('display','inherit');
            $(`#${x} h2`).css('display','inherit');
            $(`#${x} h3`).css('display','none');
            $(this).attr('front','true');
            // event.stopPropagation();

        }   
    });
});
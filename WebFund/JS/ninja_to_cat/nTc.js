

$(document).ready(function(){
    for(var i=1; i<=5; i++){
        var mr = Math.random();
        if(mr < .5){
            $(`img:nth-child(${i})`).attr('src', `ninja${i-1}.png`);
            $(`img:nth-child(${i})`).attr('alt-src', `cat${i-1}.png`);
        }
    }

    $('img').click(function(){
        var temp = $(this).attr('src');
        $(this).attr('src',$(this).attr('alt-src'));
        $(this).attr('alt-src',temp);
    });
})
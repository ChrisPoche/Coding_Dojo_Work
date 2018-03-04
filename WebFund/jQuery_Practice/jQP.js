$(document).ready(function(){
    $(".click button").click(function(){
        $('.click .header').css("color","red");
    });    
    $('.hide button').click(function(){
        $('.hide button').hide();
    });
    $('.show button').click(function(){
        $('.hide button').show('1000');
    });
    $('.toggle button').click(function(){
        $('.toggle p').toggle(1000);
    });
    $('.slideDown button').click(function(){
        $('.slideDown h1').slideDown();
    });
    $('.slideUp button').click(function(){
        $('.slideUp h1').slideUp();
    });
    $('.slideToggle button').click(function(){
        $('.slideUp h1').slideToggle();
    });
    $('.fadeIn button').click(function(){
        $('.fadeOut .header').fadeIn();
    });
    $('.fadeOut button').click(function(){
        $('.fadeOut .header').fadeOut('1000');
    });
    $('.addClass button').click(function(){
        $('.addClass p').addClass('bigBlue');
    });
    $('.before button').click(function(){
        $('.before p:first').before($('.before p:last'))
    });
    $('.after button').click(function(){
        $('.after p:first').after('HERE IT IS!');
    });
    $('.append button').click(function(){
        $('.append p:first').append('HERE IT IS!');
    });
    $('.html button').click(function(){
        $('.html h1').html('<b><i>YOU GOT GOT!!!</b></i>');
    });
    $('.attr button').click(function(){
        var BB = $('.attr h1').attr('color');
        $('.attr p').append(" it's "+ BB);
    });
    $('.val button').click(function(){
        $('.val input').val('green');
    });
    $('.text p').click(function(){
        $('.text p').text("That's what you get!")
    });
   $('.data button').click(function(){
        $(".data .header").data("test",{green: "green", yellow: "yellow",purple: "purple"});
        $('.data .header span:first').html($('.data .header').data('test').green);
        $('.data .header span:nth-child(2)').html($('.data .header').data('test').yellow);
        $('.data .header span:last').html($('.data .header').data('test').purple);
   });
});
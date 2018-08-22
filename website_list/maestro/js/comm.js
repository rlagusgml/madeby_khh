$(function(){
    $('.menu_depth1 li').mouseover(function(){
        $(this).children('.menu_depth2').stop().slideDown();
    })
    $('.menu_depth1 li').mouseout(function(){
        $(this).children('.menu_depth2').stop().slideUp();
    })
    
    
    var num=0;
    $('.main_slide li').eq(num).children('.big').fadeIn();
    
    setInterval(function(){
        $('.main_slide li').eq(num).children('.big').fadeOut('slow');
        $('.main_slide li').eq(num).children('.small').fadeTo('slow',1); 
        if(num==3){
            num=0;
            $('.main_slide li').eq(num).children('.big').fadeIn('slow');
            $('.main_slide li').eq(num).children('.small').fadeTo('slow',0.5);
        }else{
            num++;
            $('.main_slide li').eq(num).children('.big').fadeIn('slow');
            $('.main_slide li').eq(num).children('.small').fadeTo('slow',0.5);
        }
    },2000);
});
$(function(){
    $('.menu_depth1 li').mouseover(function(){
        $(this).children('.menu_depth2').stop().slideDown();
    });
    $('.menu_depth1 li').mouseout(function(){
        $(this).children('.menu_depth2').stop().slideUp();
    });
    
    var now = 1;
    var max = 2;
    var width = 1100;
    
    var slide = setInterval(function(){
        if(now<2){
            $('.main_slide ul').animate({
                'left':(now*width*(-1))+'px'
            })
            now++;
        }else{
           $('.main_slide ul').animate({
                'left':'0px'
            }) 
            now=1;
        }
    },3500)
    
});
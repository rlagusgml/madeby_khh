$(function(){
    $('.menu_depth1 li').mouseover(function(){
        $(this).children('.menu_depth2').stop().slideDown();
    })
    $('.menu_depth1 li').mouseout(function(){
        $(this).children('.menu_depth2').stop().slideUp();
    })
    
    
    var now= 1;
    var max= 8;
    var width= 150;
    
    var slide= setInterval(function(){
        if(now<8){
            $('.candy_slide ul').animate({
                'left':(now*width*(-1))+'px'
            })
            now++;
        }else{
            $('.candy_slide ul').animate({
                'left':'0px'
            })
            now=1;
        }
    },4000);
    
 
    
    
});
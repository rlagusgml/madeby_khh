$(function(){
    $('.menu_depth1 li').mouseover(function(){
        $(this).children('.sub_nav').stop().slideDown();
    });
    $('.menu_depth1 li').mouseout(function(){
        $(this).children('.sub_nav').stop().slideUp();
    });
    
    
    
    var now=1;
    var max=3;
    var width=1100;
    
    var slide=setInterval(function(){
        if(now<3){
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
    },2000);
    
    $('.col2 a').click(function(){
        $('#modal').addClass('on');
    });
    $('#modal button').click(function(){
        $('#modal').removeClass('on');
    });
});
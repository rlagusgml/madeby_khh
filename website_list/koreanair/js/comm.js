$(function(){
    $('.menu_depth1 li').mouseover(function(){
        $(this).children('.menu_depth2').stop().slideDown();
    })
    $('.menu_depth1 li').mouseout(function(){
        $(this).children('.menu_depth2').stop().slideUp();
    })
    
    
    var now=1;
    var max=4;
    var width=310;
    
    var slide=setInterval(function(){
        if(now<4){
            $('.slide_event ul').animate({
                'left':(now*width*(-1))+'px'
            })
            now++;
        }else{
             $('.slide_event ul').animate({
                'left':'0px'
            })
            now=1;
        }
    },4000)
    
    
    var num=0;
    $('.airline_ticket_slide li').eq(num).fadeIn();
    
    setInterval(function(){
        $('.airline_ticket_slide li').eq(num).fadeOut('slow');
        
        if(num==5){
            num=0;
            $('.airline_ticket_slide li').eq(num).fadeIn('slow');
        }else{
            num++;
            $('.airline_ticket_slide li').eq(num).fadeIn('slow');
        }
    },6000);
    
    
    
})
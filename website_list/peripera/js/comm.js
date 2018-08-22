
$(function(){
    $('.menu_depth1>li').mouseover(function(){
        $(this).children(".menu_depth2").show();
    });
    $('.menu_depth1>li').mouseleave(function(){
        $(this).children(".menu_depth2").hide();
    });
    
    
    var num=0;
    $('.mainproduct_list>li').eq(num).fadeIn();
    
    setInterval(function(){
        $('.mainproduct_list>li').eq(num).fadeOut('slow');
        
        if(num==3){
            num=0;
            $('.mainproduct_list>li').eq(num).fadeIn('slow');
        }else{
            num++;
            $('.mainproduct_list>li').eq(num).fadeIn('slow');
        }
    },6000);
    
    
    
});
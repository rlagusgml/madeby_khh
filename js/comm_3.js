$(function(){
     $('.event_box_5').click(function(){
        $('.event_popup_list_5').addClass('pop');
    })
     $('.close').click(function(){
         $('.event_popup_list_5').removeClass('pop');
    })
     $('.event_box_6').click(function(){
        $('.event_popup_list_6').addClass('pop');
    })
     $('.close').click(function(){
         $('.event_popup_list_6').removeClass('pop');
    })
     
    $(function(){
	$(".more_web").click(function(){
		$("web_list_accordion").slideDown();
		if(
            $(this).next().is(":visible")
        ){
			$(this).next().slideUp();
		}
	})
})
    
});
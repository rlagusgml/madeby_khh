$(function (){

  var now=1;
  var max=8;
  var width=230;

  var slide=setInterval(function(){
    if(now<8){
      $('.slide_wrap ul').animate({
        'left':(now*width*(-1))+'px'
      })
      now++;
    }else{
      $('.slide_wrap ul').animate({
        'left':'0px'
      })
      now=1;
  }
  },7000);

})
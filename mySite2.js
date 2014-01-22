$(document).ready(function(){
  $('.leftNav ul').hide();
  $('header h1').mouseover(function(event){
    $('.leftNav ul').slideDown(300);
  });
  $('.leftNav').mouseleave(function(event){
    $('.leftNav ul').slideUp(300);
  })
});

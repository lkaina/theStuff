$(document).ready(function(){
  $('.slideMenu').hover(function(event){
    $('.leftNav').slideDown(300);
  }, function(event){
    $('.leftNav').slideUp(300);
  });
});

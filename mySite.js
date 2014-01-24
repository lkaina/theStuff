$(document).ready(function(){
  //hide all invisible items
  $('.leftNav').hide();
  $('#bio').hide();

  $('.leftHead nav').mouseover(function(event){
    $('.leftNav').stop(true, true).slideDown(300);
    $('.leftHead h1').css('color', 'rgb(0, 153, 255)');
  });
  $('.leftHead nav').mouseleave(function(event){
    $('.leftNav').stop(true, true).slideUp(300);
    $('.leftHead h1').css('color', 'black');
  });
  $('#bioLink').on('click', function(event){

    $('#bio').show();
    $('#home').hide();
    // event.preventDefault() && event.stopPropagation();

  });

  // $('main').hover(function(event){
  //   $(this).css({
  //     'transition-property': 'background-position',
  //     'transition-duration': '0.2s',
  //     'transition-timing-function': 'ease-out',
  //     'background-position': '1440px 0'
  //   });
  // }, function(event){
  //   $(this).css({
  //     'transition-property': 'background-position',
  //     'transition-duration': '0.2s',
  //     'transition-timing-function': 'ease-out',
  //     'background-position': '0 0'
  //   });
  // });
});

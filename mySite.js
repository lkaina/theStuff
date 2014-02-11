$(document).ready(function(){
  //scale text by window size
  var $body = $('body'); //Cache this for performance

  var windowScale = function() {
    var setWidth = 1440;
    var minWidth = 1024;
    var initFontSize = 36;

    var maxWidth = window.screen.width;
    var currWidth = window.innerWidth;
    var scaleFontSize;

    if (currWidth < minWidth) {
      scaleFontSize = initFontSize * (minWidth / setWidth);
    } else if (currWidth >= setWidth) {
      scaleFontSize = initFontSize;
    } else {
      scaleFontSize = initFontSize * (currWidth / setWidth);
    }
    $('body').css('font', 'italic small-caps normal '+scaleFontSize+'px/150% Arial, Helvetica, sans-serif');
  }

  $(window).resize(function(){
      windowScale();
  });
  //Fire it when the page first loads:
  windowScale();

  var randomPic = function() {
    $('#interests').children().each(function(){
      $(this).css({
        'top': Math.ceil(Math.random()*60 + 20) + '%',
        'left': Math.ceil(Math.random()*60 + 20) + '%',
        'webkit-transform': 'rotate(' + Math.ceil(Math.random()*360) + 'deg)',
        'moz-transform': 'rotate(' + Math.ceil(Math.random()*360) + 'deg)',
        'transform': 'rotate(' + Math.ceil(Math.random()*360) + 'deg)',
        'z-index': Math.ceil(Math.random()*10 + 20)
      });
    });
  }

  randomPic();

  //hide all invisible items
  $('.leftNav').hide();
  $('.leftHead nav').on('mouseover', function(event){
    $('.leftNav').stop(true, true).slideDown(300);
    $('.leftHead h1').css({
      'color': 'rgb(0, 153, 255)',
      'transition-property': 'text-shadow',
      'transition-duration': '0.2s',
      'transition-timing-function': 'ease-out',
      'text-shadow': '1px 1px 2px gray'
    });
  });
  $('.leftHead nav').on('mouseleave', function(event){
    $('.leftNav').stop(true, true).slideUp(300);
    $('.leftHead h1').css({
      'color': 'black',
      'transition-property': 'text-shadow',
      'transition-duration': '0.1s',
      'transition-timing-function': 'ease-out',
      'text-shadow': 'none'
    });
  });
  $('.leftHead nav').on('click', function(event){
    $('.leftNav').stop(true, true).slideUp(300);
    $('.leftHead h1').css({
      'color': 'black',
      'transition-property': 'text-shadow',
      'transition-duration': '0.1s',
      'transition-timing-function': 'ease-out',
      'text-shadow': 'none'
    });
  });
  //home page
  $('.leftHead h1').on('click', function(event){
    $('#home').css({
      'transition-property': 'left',
      'transition-duration': '0.3s',
      'transition-timing-function': 'ease-out',
      'left': '0'
    });
    $('#bio').css({
      'transition-property': 'left',
      'transition-duration': '0.3s',
      'transition-timing-function': 'ease-out',
      'left': '100%'
    });
    $('#projects').css({
      'transition-property': 'left',
      'transition-duration': '0.3s',
      'transition-timing-function': 'ease-out',
      'left': '200%'
    });
    $('#resume').css({
      'transition-property': 'left',
      'transition-duration': '0.3s',
      'transition-timing-function': 'ease-out',
      'left': '300%'
    });
    $('#interests').css({
      'transition-property': 'left',
      'transition-duration': '0.3s',
      'transition-timing-function': 'ease-out',
      'left': '400%'
    });
  });
  //bio page
  $('#bioLink').on('click', function(event){
    $('#home').css({
      'transition-property': 'left',
      'transition-duration': '0.3s',
      'transition-timing-function': 'ease-out',
      'left': '-100%'
    });
    $('#bio').css({
      'transition-property': 'left',
      'transition-duration': '0.3s',
      'transition-timing-function': 'ease-out',
      'left': '0'
    });
    $('#projects').css({
      'transition-property': 'left',
      'transition-duration': '0.3s',
      'transition-timing-function': 'ease-out',
      'left': '100%'
    });
    $('#resume').css({
      'transition-property': 'left',
      'transition-duration': '0.3s',
      'transition-timing-function': 'ease-out',
      'left': '200%'
    });
    $('#interests').css({
      'transition-property': 'left',
      'transition-duration': '0.3s',
      'transition-timing-function': 'ease-out',
      'left': '300%'
    });
  });
  //projects page
  $('#projectsLink').on('click', function(event){
    $('#home').css({
      'transition-property': 'left',
      'transition-duration': '0.3s',
      'transition-timing-function': 'ease-out',
      'left': '-200%'
    });
    $('#bio').css({
      'transition-property': 'left',
      'transition-duration': '0.3s',
      'transition-timing-function': 'ease-out',
      'left': '-100%'
    });
    $('#projects').css({
      'transition-property': 'left',
      'transition-duration': '0.3s',
      'transition-timing-function': 'ease-out',
      'left': '0'
    });
    $('#resume').css({
      'transition-property': 'left',
      'transition-duration': '0.3s',
      'transition-timing-function': 'ease-out',
      'left': '100%'
    });
    $('#interests').css({
      'transition-property': 'left',
      'transition-duration': '0.3s',
      'transition-timing-function': 'ease-out',
      'left': '200%'
    });
  });
  //resume page
  $('#resumeLink').on('click', function(event){
    $('#home').css({
      'transition-property': 'left',
      'transition-duration': '0.3s',
      'transition-timing-function': 'ease-out',
      'left': '-300%'
    });
    $('#bio').css({
      'transition-property': 'left',
      'transition-duration': '0.3s',
      'transition-timing-function': 'ease-out',
      'left': '-200%'
    });
    $('#projects').css({
      'transition-property': 'left',
      'transition-duration': '0.3s',
      'transition-timing-function': 'ease-out',
      'left': '-100%'
    });
    $('#resume').css({
      'transition-property': 'left',
      'transition-duration': '0.3s',
      'transition-timing-function': 'ease-out',
      'left': '0'
    });
    $('#interests').css({
      'transition-property': 'left',
      'transition-duration': '0.3s',
      'transition-timing-function': 'ease-out',
      'left': '100%'
    });
  });
  //interests page
  $('#interestsLink').on('click', function(event){
    $('#home').css({
      'transition-property': 'left',
      'transition-duration': '0.3s',
      'transition-timing-function': 'ease-out',
      'left': '-400%'
    });
    $('#bio').css({
      'transition-property': 'left',
      'transition-duration': '0.3s',
      'transition-timing-function': 'ease-out',
      'left': '-300%'
    });
    $('#projects').css({
      'transition-property': 'left',
      'transition-duration': '0.3s',
      'transition-timing-function': 'ease-out',
      'left': '-200%'
    });
    $('#resume').css({
      'transition-property': 'left',
      'transition-duration': '0.3s',
      'transition-timing-function': 'ease-out',
      'left': '-100%'
    });
    $('#interests').css({
      'transition-property': 'left',
      'transition-duration': '0.3s',
      'transition-timing-function': 'ease-out',
      'left': '0'
    });
  });
  var pSlide = false;
  var dSlide = false;
  //Donator mouseover
  $('.leftTab, .donator').on('mouseover', function(event){
    if (!dSlide) {
      $('.donator').css({
        // 'transition-property': 'top, z-index',
        'transition-property': 'top',
        'transition-duration': '0.3s',
        'transition-timing-function': 'ease-out',
        'top': '-47%',
        'z-index': '4'
      });
      $('.leftTab').css({
        // 'transition-property': 'top, z-index',
        'transition-property': 'top',
        'transition-duration': '0.3s',
        'transition-timing-function': 'ease-out',
        'top': '53%',
        'z-index': '5'
      });
      $('.phonetag').css({
        'z-index': '1'
      });
      $('.rightTab').css({
        'z-index': '2'
      });
      pSlide = false;
    }
  });
  //Donator mouseleave
  $('.leftTab, .donator').on('mouseleave', function(event){
    if (!dSlide) {
      $('.donator').css({
        'transition-property': 'top',
        'transition-duration': '0.3s',
        'transition-timing-function': 'ease-out',
        'top': '-53%'
      });
      $('.leftTab').css({
        'transition-property': 'top',
        'transition-duration': '0.3s',
        'transition-timing-function': 'ease-out',
        'top': '47%'
      });
    }
  });
  //Donator on click
  $('.leftTab, .donator').on('click', function(event){
    if (!dSlide) {
      $('.donator').css({
        'transition-property': 'top',
        'transition-duration': '0.3s',
        'transition-timing-function': 'ease-out',
        'top': '-6%'
      });
      $('.leftTab').css({
        'transition-property': 'top',
        'transition-duration': '0.3s',
        'transition-timing-function': 'ease-out',
        'top': '94%'
      });
      $('.donator .screenShots img').css({
        'transition-property': 'width',
        'transition-duration': '0.3s',
        'transition-timing-function': 'ease-out',
        'width': '25%'
      });
      $('.donator .tech').css({
        'transition-property': 'left',
        'transition-duration': '0.3s',
        'transition-timing-function': 'ease-out',
        'left': '5%'
      });
    } else {
      $('.donator').css({
        'transition-property': 'top',
        'transition-duration': '0.3s',
        'transition-timing-function': 'ease-out',
        'top': '-53%'
      });
      $('.leftTab').css({
        'transition-property': 'top',
        'transition-duration': '0.3s',
        'transition-timing-function': 'ease-out',
        'top': '47%'
      });
      $('.donator .screenShots img').css({
        'transition-property': 'width',
        'transition-duration': '0.3s',
        'transition-timing-function': 'ease-out',
        'width': '12%'
      });
      $('.donator .tech').css({
        'transition-property': 'left',
        'transition-duration': '0.3s',
        'transition-timing-function': 'ease-out',
        'left': '-30%'
      });
    }
    dSlide = !dSlide;
  });
  //Phonetag mouseover
  $('.rightTab, .phonetag').on('mouseover', function(event){
    if (!pSlide) {
      $('.donator, .leftTab').css({
        'z-index': '1'
      });
      $('.phonetag').css({
        'transition-property': 'bottom',
        'transition-duration': '0.3s',
        'transition-timing-function': 'ease-out',
        'bottom': '-47%',
        'z-index': '2'
      });
      $('.rightTab').css({
        'transition-property': 'top',
        'transition-duration': '0.3s',
        'transition-timing-function': 'ease-out',
        'top': '41%',
        'z-index': '3'
      });
      dSlide = false;
    }
  });
  //Phonetag mouseleave
  $('.rightTab, .phonetag').on('mouseleave', function(event){
    if (!pSlide) {
      $('.phonetag').css({
        'transition-property': 'bottom',
        'transition-duration': '0.3s',
        'transition-timing-function': 'ease-out',
        'bottom': '-53%'
      });
      $('.rightTab').css({
        'transition-property': 'top, z-index',
        'transition-duration': '0.3s',
        'transition-timing-function': 'ease-out',
        'top': '47%'
      });
    }
  });
  //Phonetag on click
  $('.rightTab, .phonetag').on('click', function(event){
    if (!pSlide) {
      $('.phonetag').css({
        'transition-property': 'bottom',
        'transition-duration': '0.3s',
        'transition-timing-function': 'ease-out',
        'bottom': '-6%'
      });
      $('.rightTab').css({
        'transition-property': 'top',
        'transition-duration': '0.3s',
        'transition-timing-function': 'ease-out',
        'top': '0'
      });
      $('.phonetag .screenShots').css({
       'transition-property': 'left',
        'transition-duration': '0.3s',
        'transition-timing-function': 'ease-out',
        'left': '12%'
      });
       $('.phonetag .screenShots img').css({
        'transition-property': 'width',
        'transition-duration': '0.3s',
        'transition-timing-function': 'ease-out',
        'width': '25%',
      });
      $('.phonetag .tech').css({
        'transition-property': 'right',
        'transition-duration': '0.3s',
        'transition-timing-function': 'ease-out',
        'right': '5%'
      });
    } else {
      $('.phonetag').css({
        'transition-property': 'bottom',
        'transition-duration': '0.3s',
        'transition-timing-function': 'ease-out',
        'bottom': '-53%'
      });
      $('.rightTab').css({
        'transition-property': 'top',
        'transition-duration': '0.3s',
        'transition-timing-function': 'ease-out',
        'top': '47%'
      });
      $('.phonetag .screenShots').css({
       'transition-property': 'left',
        'transition-duration': '0.3s',
        'transition-timing-function': 'ease-out',
        'left': '20%'
      });
      $('.phonetag .screenShots img').css({
        'transition-property': 'width',
        'transition-duration': '0.3s',
        'transition-timing-function': 'ease-out',
        'width': '12%',
      });
      $('.phonetag .tech').css({
        'transition-property': 'right',
        'transition-duration': '0.3s',
        'transition-timing-function': 'ease-out',
        'right': '-55%'
      });
    }
    pSlide = !pSlide;
  });
  //interests page
$('#interests').children().on('mouseover', function(event) {
  event.preventDefault() && event.stopPropagation();
  var rotation = $(this).css('webkit-transform');
  var zIndex = $(this).css('z-index');
  if ($(this).prop('tagName') === 'VIDEO') {
    $(this).get(0).play();
  }
  $(this).css({
    'transiton-property': '-webkit-transform, -moz-transform, z-index',
    'transition-duration': '0.3s',
    'transition-timing-function': 'ease-out',
    '-webkit-transform': 'rotate(0deg) scale(1.5)',
    '-moz-transform': 'rotate(0deg) scale(1.5)',
    'z-index': '35'
  });
  $(this).on('mouseleave', function(event) {
    event.preventDefault() && event.stopPropagation();
    if ($(this).prop('tagName') === 'VIDEO') {
      $(this).get(0).pause();
    }
    $(this).css({
      'transiton-property': '-webkit-transform, -moz-transform, z-index',
      'transition-duration': '0.3s',
      'transition-timing-function': 'ease-out',
      '-webkit-transform': rotation+' scale(1)',
      '-moz-transform': rotation+' scale(1)',
      'z-index': '30'
    });
  });
});
// $('video').on('mouseleave', function(event) {
//   event.preventDefault() && event.stopPropagation();
//   $(this).get(0).pause();
//   if ($(this).attr('id') === 'flipVid') {
//     $(this).css({
//       '-webkit-transform': 'rotate(10deg)'
//     });
//   } else {
//     $(this).css({
//       '-webkit-transform': 'rotate(-10deg)'
//     });
//   }
// });
});

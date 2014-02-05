$(document).ready(function(){
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
    // $('main').css({
    //   'transition-property': 'left',
    //   'transition-duration': '0.3s',
    //   'transition-timing-function': 'ease-out',
    //   'left': '15%'
    // });
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
    // $('main').css({
    //   'transition-property': 'left',
    //   'transition-duration': '0.3s',
    //   'transition-timing-function': 'ease-out',
    //   'left': '0'
    // });
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
    // $('main').css({
    //   'transition-property': 'left',
    //   'transition-duration': '0.3s',
    //   'transition-timing-function': 'ease-out',
    //   'left': '0'
    // });
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
        // 'transition-property': 'z-index',
        // 'transition-duration': '0.3s',
        // 'transition-timing-function': 'ease-out',
        'z-index': '1'
      });
      $('.rightTab').css({
        // 'transition-property': 'z-index',
        // 'transition-duration': '0.3s',
        // 'transition-timing-function': 'ease-out',
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
        // 'transition-property': 'top, z-index',
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
      $('.screenShots img').css({
        'transition-property': 'width',
        'transition-duration': '0.3s',
        'transition-timing-function': 'ease-out',
        'width': '150px'
      });
      $('.tech').css({
        'transition-property': 'left',
        'transition-duration': '0.3s',
        'transition-timing-function': 'ease-out',
        'left': '5%'
      });
      $('.extraInfo').removeClass('hidden');
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
      $('.screenShots img').css({
        'transition-property': 'width',
        'transition-duration': '0.3s',
        'transition-timing-function': 'ease-out',
        'width': '60px'
      });
      $('.tech').css({
        'transition-property': 'left',
        'transition-duration': '0.3s',
        'transition-timing-function': 'ease-out',
        'left': '-30%'
      });
      $('.extraInfo').addClass('hidden');
    }
    dSlide = !dSlide;
  });
  //Phonetag mouseover
  $('.rightTab, .phonetag').on('mouseover', function(event){
    if (!pSlide) {
      $('.donator, .leftTab').css({
        // 'transition-property': 'z-index',
        // 'transition-duration': '0.3s',
        // 'transition-timing-function': 'ease-out',
        'z-index': '1'
      });
      $('.phonetag').css({
        // 'transition-property': 'bottom, z-index',
        'transition-property': 'bottom',
        'transition-duration': '0.3s',
        'transition-timing-function': 'ease-out',
        'bottom': '-47%',
        'z-index': '2'
      });
      $('.rightTab').css({
        // 'transition-property': 'top, z-index',
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
    }
    pSlide = !pSlide;
  });
  //interests page
    // event.preventDefault() && event.stopPropagation();

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

(function($){
  'use strict';

  $('.mobile-button').on('click', function() {
    $('body').toggleClass('fixed');
    $(this).closest('header').toggleClass('open');
  });

  $('.onepage').on('click', function() {
    var section = $(this).data('section');
    $('html, body').animate({
      scrollTop: $('.main-content').find('div[data-target="' + section + '"]').offset().top,
    }, 'slow');
    $('body').removeClass('fixed');
    $('header').removeClass('open');
  });
  
  // $(document).ready(function(){
  //   $('.app').mousemove(function(e) {
  //     var elementOffset = $(this).offset();
  //     var elementWidth = $(this).outerWidth();
  //     var elementHeight = $(this).outerHeight();
  //     var relativeXPosition = (e.pageX - elementOffset.left);
  //     var relativeYPosition = (e.pageY - elementOffset.top);
  //     $('.cursor').css({
  //       top: elementHeight + (relativeYPosition - elementHeight) - 160,
  //       left: elementWidth + (relativeXPosition - elementWidth) - 160,
  //     });
  //   });
  // });
})(jQuery);
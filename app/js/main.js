$(function(){

    $('.slider__wrapper').slick({

      arrows: false,
      dots: true,
      fade: true,
      appendDots: $('.dots')

    });

    $('.slider__wrapper').on('wheel', (function (e) {
      e.preventDefault();

      if (e.originalEvent.deltaY < 0) {
        $(this).slick('slickNext');
      } else {
        $(this).slick('slickPrev');
      }
    }));
 
});
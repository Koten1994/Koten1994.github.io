$(document).ready(function(){
  // SLIDER 
    $('.slider .row').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        infinite: true,
        prevArrow: $('.prev_custom'),
        nextArrow: $('.next_custom'),
        responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                arrows: false
              }
            },
            {
              breakpoint: 577,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
              }
            }
        ]
    });
    // SLIDER END
    
    $('.mmenu_title').click(function(){
      if($('.mmenu').hasClass('show')){
        $('.mmenu').slideUp().removeClass('show');
      } else {
        $('.mmenu').slideDown().addClass('show');
      }
    });    
    
});
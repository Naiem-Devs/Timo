(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 


  // owlCarousel
  $(".archive_slider").owlCarousel({
    loop: true,
    margin: 30,
    items: 1,
    navText: [
      '<i class="fal fa-chevron-left"></i>',
      '<i class="fal fa-chevron-right"></i>'
    ],
    smartSpeed: 1000,
    nav: true,
    dots: false
  });


 
})(jQuery);

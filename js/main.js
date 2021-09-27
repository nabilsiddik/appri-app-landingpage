$(document).ready(function(){

  // Mobile Menu
  jQuery('#mobile-menu').meanmenu({
    meanMenuContainer: '.mobile-menu',
    meanScreenWidth: "991",
  });

  // Counter Section
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

  // Video Popup Section
    $('.popup-video').magnificPopup({
        type: 'iframe',
        iframe: {
            markup: '<div class="mfp-iframe-scaler">'+
                      '<div class="mfp-close"></div>'+
                      '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                    '</div>',
          
            patterns: {
              youtube: {
                index: 'youtube.com/',
                id: 'v=',
          
                src: 'https://www.youtube.com/embed/%id%?autoplay=1'
              },
              vimeo: {
                index: 'vimeo.com/',
                id: '/',
                src: '//player.vimeo.com/video/%id%?autoplay=1'
              },
              gmaps: {
                index: 'https://maps.google.com',
                src: '%id%&output=embed'
              }
          
            },
          
            srcAction: 'iframe_src',
          }
    });

    // Testimonial Slider Section
    $('#testimonial_section .testimonial-slider-content').slick({
      arrows: false,
      asNavFor: '.testimonial-slider-img', 
      fade: true,
    });
    $('#testimonial_section .testimonial-slider-img').slick({
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.testimonial-slider-content',

      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
          }
        },
      ]
    });


    // Brand Slider Section
    $('.brand-active').owlCarousel({
      loop:true,
      margin:50,
      nav:false,
      autoplay: true,
      autoplayTimeout: 3000,
      lazyLoad: true,
      autoplayHoverPause: true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:4
          }
      }
  })
  
});
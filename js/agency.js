(function($) {
  "use strict"; // Start of use strict
  $("#texty").addClass("scrolling");
  $("body").scroll(function() {

    if($('#cor').isInViewport()){
      // corner = true;
      $('#cor').addClass('slideLeft');
    } else if($('#sky').isInViewport()){
      // corner = true;
      $('#sky').addClass('slideRight');
    } else if($('#bud').isInViewport()){
      // corner = true;
      $('#bud').addClass('slideLeft');
    } else if($('#hill').isInViewport()){
      // corner = true;
      $('#hill').addClass('slideRight');
    } else if($('#chq').isInViewport()){
      // corner = true;
      $('#chq').addClass('slideLeft');
    } else if($('#portfolio').isInViewport()){
      // corner = true;
      $('#portfolio').addClass('fade');
    }
  
  });

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Hide navbar when modals trigger
  $('.portfolio-modal').on('show.bs.modal', function(e) {
    $(".navbar").addClass("d-none");
  })
  $('.portfolio-modal').on('hidden.bs.modal', function(e) {
    $(".navbar").removeClass("d-none");
  })

  $.fn.isInViewport = function() {
    var tony = $(this);
    console.log(tony);
    if(tony.offset() !== undefined){
      var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
    }
    
  };

})(jQuery); // End of use strict

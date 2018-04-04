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
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  $.fn.isInViewport = function() {
    var tony = $(this);
    if(tony.offset() !== undefined){
      var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
    }
  };
})(jQuery); // End of use strict

(function($) {
  "use strict"; // Start of use strict

  $("#texty").addClass("scrolling");
  
  $("body").scroll(function() {

    if ($("#cor").isInViewport()) {
      $("#cor").addClass("slideLeft");
    } else if ($("#tow").isInViewport()) {
      $("#tow").addClass("slideRight");
    } else if ($("#sky").isInViewport()) {
      $("#sky").addClass("slideLeft");
    } else if ($("#bud").isInViewport()) {
      $("#bud").addClass("slideRight");
    } else if ($("#hay").isInViewport()) {
      $("#hay").addClass("slideLeft");
    } else if ($("#hill").isInViewport()) {
      $("#hill").addClass("slideRight");
    } else if ($("#cen").isInViewport()) {
      $("#cen").addClass("slideLeft");
    } else if ($("#chq").isInViewport()) {
      $("#chq").addClass("slideRight");
    } else if ($("#portfolio").isInViewport()) {
      $("#portfolio").addClass("fade");
    } 
  });

  // Smooth scrolling using jQuery easing
  $('a[href*="#"]:not([href="#"]:not([href*="#portfolioModal"]))').click(
    function() {
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
    }
  );


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

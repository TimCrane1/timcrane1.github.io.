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

  let modalButtons = document.querySelectorAll(".project_title");
  let modalCloseButtons = document.querySelectorAll(".custom-modal-close");
  modalButtons.forEach(function(modalButton){
    modalButton.addEventListener('click', function(){
      let modalId = this.dataset.href;
      toggleModal(modalId);
    });
  });

  modalCloseButtons.forEach(function(modalCloseButton){
     modalCloseButton.addEventListener("click", function() {
       let openModals = document.querySelectorAll('.open');
       openModals.forEach(function(openModal){
         openModal.classList.add('out');
         openModal.classList.remove('open');
         setTimeout(() => {
           openModal.classList.remove('out');
         }, 500);
       }) 
       document.querySelector('.modal-overlay').classList.remove('in');
     });
  });

  function toggleModal(id){
    let modal = document.getElementById(id);
    let modalOverlay = document.querySelector('.modal-overlay');
    modalOverlay.classList.toggle('in');
    modal.classList.toggle('open')

  }

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

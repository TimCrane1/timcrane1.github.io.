"use strict";

$(document).ready(function() {
  $("#texty").addClass("scrolling");

  var topBtn = false;
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
      $("#chq").addClass("slideLeft");
    } else if ($("#portfolio").isInViewport()) {
      $("#portfolio").addClass("fade");
    }
    if (document.body.scrollTop < 250) {
      if (document.getElementById("top-btn").classList.contains("in")) {
        document.getElementById("top-btn").classList.remove("in");
      }
    }
    if (document.body.scrollTop >= 250) {
      if (!document.getElementById("top-btn").classList.contains("in")) {
        document.getElementById("top-btn").classList.add("in");
      }
    }
  });

  //   window.addEventListener('resize', function(){
  //     if(window.innerWidth > 568){

  //     }
  // });

  // Smooth scrolling using jQuery easing
  // $('a[href*="#"]:not([href="#"]:not([href*="#portfolioModal"]))').click(
  //   function() {
  //     if (
  //       location.pathname.replace(/^\//, "") ==
  //         this.pathname.replace(/^\//, "") &&
  //       location.hostname == this.hostname
  //     ) {
  //       var target = $(this.hash);
  //       target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
  //       if (target.length) {
  //         $("html, body").animate(
  //           {
  //             scrollTop: target.offset().top
  //           },
  //           800,
  //           "easeInOutExpo"
  //         );
  //         return false;
  //       }
  //     }
  //   }
  // );

  // function scrollFunction() {
  //   document.body.scrollTop > 250 ? document.getElementById("top-btn").style.display = "flex" : document.getElementById("top-btn").style.display = "none";
  //   console.log('scrollFunction')
  // }
  // function topFunction() {
  //   (document.body.scrollTop = 0), (document.documentElement.scrollTop = 0);
  //   console.log('topFunction')
  // }
  // (window.onscroll = function() {
  //   scrollFunction();
  // })

  $(document).scrollTop() > 250 &&
    (document.getElementById("top-btn").style.display = "flex"),
    $("#top-btn").on("click", function() {
      $(".top-link").trigger("click");
    }),
    $('a[href*="#"]')
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(e) {
        if (
          location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
          location.hostname == this.hostname
        ) {
          var t = $(this.hash);
          (t = t.length ? t : $("[name=" + this.hash.slice(1) + "]")),
            t.length &&
              (e.preventDefault(),
              $("html, body").animate(
                {
                  scrollTop: t.offset().top
                },
                1e3,
                function() {
                  var e = $(t);
                  return (
                    e.focus(),
                    !e.is(":focus") &&
                      (e.attr("tabindex", "-1"), void e.focus())
                  );
                }
              ));
        }
      });

  $.fn.isInViewport = function() {
    var tony = $(this);
    if (tony.offset() !== undefined) {
      var elementTop = $(this).offset().top;
      var elementBottom = elementTop + $(this).outerHeight();
      var viewportTop = $(window).scrollTop();
      var viewportBottom = viewportTop + $(window).height();
      return elementBottom > viewportTop && elementTop < viewportBottom;
    }
  };
}); // End of use strict

function BackgroundNode(_ref) {
  var node = _ref.node,
    loadedClassName = _ref.loadedClassName;

  var src = node.getAttribute("data-background-image-url");
  var show = function show(onComplete) {
    requestAnimationFrame(function() {
      node.style.backgroundImage = "url(" + src + ")";
      node.classList.add(loadedClassName);
      onComplete();
    });
  };

  return {
    node: node,

    // onComplete is called after the image is done loading.
    load: function load(onComplete) {
      var img = new Image();
      img.onload = show(onComplete);
      img.src = src;
    }
  };
}

var defaultOptions = {
  selector: "[data-background-image-url]",
  loadedClassName: "loaded"
};

function BackgroundLazyLoader() {
  var _ref2 =
      arguments.length > 0 && arguments[0] !== undefined
        ? arguments[0]
        : defaultOptions,
    selector = _ref2.selector,
    loadedClassName = _ref2.loadedClassName;

  var nodes = [].slice
    .apply(document.querySelectorAll(selector))
    .map(function(node) {
      return new BackgroundNode({
        node: node,
        loadedClassName: loadedClassName
      });
    });

  var callback = function callback(entries, observer) {
    entries.forEach(function(_ref3) {
      var target = _ref3.target,
        isIntersecting = _ref3.isIntersecting;

      if (!isIntersecting) {
        return;
      }

      var obj = nodes.find(function(it) {
        return it.node.isSameNode(target);
      });

      if (obj) {
        obj.load(function() {
          // Unobserve the node:
          observer.unobserve(target);
          // Remove this node from our list:
          nodes = nodes.filter(function(n) {
            return !n.node.isSameNode(target);
          });

          // If there are no remaining unloaded nodes,
          // disconnect the observer since we don't need it anymore.
          if (!nodes.length) {
            observer.disconnect();
          }
        });
      }
    });
  };

  var observer = new IntersectionObserver(callback);
  nodes.forEach(function(node) {
    return observer.observe(node.node);
  });
}

BackgroundLazyLoader();

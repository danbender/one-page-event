//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        // $(".intro-img").addClass("blurry");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        // $(".intro-img").removeClass("blurry");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Show/hide button

var lastScrollTop = 0;

$(window).scroll(function(event){

      var st = $(this).scrollTop();

      if (st < 100){
            $("#btnTop").removeClass('active');
      } else {
            if (st > lastScrollTop){
                  $("#btnTop").removeClass('active');
            } else {
                  $("#btnTop").addClass('active');
            }
      }

    lastScrollTop = st;

});


// Scroll to bottom on document ready
$(document).ready(function(){
  $("html, body").animate({ scrollTop: $(document).height() }, 200);
  return false;
});


// Smooth scroll
$(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();
        var target = this.hash,
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 200, function () {
            window.location.hash = target;
        });
    });
});
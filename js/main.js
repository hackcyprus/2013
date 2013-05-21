// Make slides fit screen
$.fn.slideSize = function(){

  $(".slide").each(function() {
    
    var contentHeight = $(this).find('.content').outerHeight();
    var slideHeight = $(window).outerHeight();
    var topPosition  = (slideHeight-contentHeight)/2;
    
    $(this).css("height", slideHeight);
    $(this).find(".content").css("top", topPosition);
    
  });

};


$(document).ready(function(){
  $.fn.slideSize();

  // Smooth scrolling
  $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();
      var target = this.hash,
      $target = $(target);
      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 400, 'swing', function () {
          window.location.hash = target;
      });
  });

});

// Listen for window resize events, debounce and call them again.
$(window).smartresize(function(){
  $.fn.slideSize();
});



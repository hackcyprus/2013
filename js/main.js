// Make slides fit screen
$.slideSize = function(){

  $(".slide").each(function() {
    
    var contentHeight = $(this).find('.content').outerHeight();
    var slideHeight = $(window).outerHeight();
    var topPosition  = (slideHeight-contentHeight)/2;
    
    $(this).css("height", slideHeight);
    $(this).find(".content").css("top", topPosition+35);
    
  });

};

// Make sure that head image is always full-bleed
$.fullBleed = function(){
  
  $(".full-bleed").each(function(){

    var wW = $(window).outerWidth();
    var wH = $(window).outerHeight();

    if(wW > wH){
      $(this).css({
        "width": "110%",
        "height": "auto"
        });
    }

    else {
      $(this).css({
        "width": "auto",
        "height": "110%"
        });
    }

  });

};


$(document).ready(function(){
  $.slideSize();
  $.fullBleed();

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
  $.slideSize();
  $.fullBleed();
});



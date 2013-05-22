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

WebFontConfig = {
  custom: { families: ['deming', 'sullivan'],
  urls: [ 'fonts/fonts.css' ] },
  loading: function() {
    
  },
  active: function() {
     $('body').fadeIn();
     $.fn.slideSize();
  },
  inactive: function() {
    $.fn.slideSize();
    $('body').fadeIn();
  },
};
(function() {
  var wf = document.createElement('script');
  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();



$(document).ready(function(){
  

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



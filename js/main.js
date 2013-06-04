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

  typekit: {
    id: 'bie6xni'
  },

  active: function() {
     $.fn.slideSize();
     $('body').css("visibility", "visible");
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

  $(window).scroll(function () {
    $("#slick-share").removeClass('open');
  });

  // Mailchimp form & JSONP callback
  $('#mc_embed_signup form').on('submit', function(e) {
    var $form = $(this);

    if ($form.hasClass('disabled')) return;

    var $btn = $form.find('#mc-embedded-subscribe')
      , $email = $form.find('#mce-EMAIL')
      , val = $btn.val()
      , deferred = $.ajax({
          type: $form.attr('method'),
          url: $form.attr('action'),
          data: $form.serialize(),
          dataType: 'jsonp',
          jsonp: 'c',
          contentType: 'application/json; charset=UTF-8'
        });

    $btn.val('Sending..');

    deferred.done(function(data) {
      if (data.result == 'success') {
        $email.animate({
          width: 0,
          paddingLeft:0,
          paddingRight: 0,
          margin: 0
        }, 200, 'swing', function() {
          $(this).hide();
        });
        $form.animate({width: '19em'}, 200, 'swing');
        $btn.animate({width: '19em'}, 200, 'swing', function() {
          $btn.addClass('disabled').attr('disabled', 'disabled');
          $form.addClass('disabled');
        });
        $btn.removeClass('fail').val("Thanks, you're now subscribed!");
      } else {
        $btn.addClass('fail').val('Nope');
        $email.addClass('fail');
      }
    });

    deferred.fail(function() {
      $btn.val(val);
    });

    e.preventDefault();
    return false;
  });

});

// Listen for window resize events, debounce and call them again.
$(window).smartresize(function(){
  $.fn.slideSize();
});

(function(global, hc, $) {

  // main javascript
  // ---------------

  var mousemoved = false;

  function mailchimpSubmit(e) {
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
        $btn.addClass('fail').val('Hm, error!');
        $email.addClass('fail');
      }
    });

    deferred.fail(function() {
      $btn.val(val);
    });

    e.preventDefault();
    return false;
  };

  // Make slides fit screen
  function slideSize() {
    $(".slide").each(function() {
      var contentHeight = $(this).find('.content').outerHeight();
      var slideHeight = $(window).outerHeight();
      var topPosition  = (slideHeight-contentHeight)/2;
      $(this).css("height", slideHeight);
      $(this).find(".content").css("top", topPosition);
    });
  };

  $(global).smartresize(function(){
    slideSize();
  });

  var closeShare = hc.once(function() {
    $('#slick-share').removeClass('open');
  });

  var mousemove = hc.once(function() {
    mousemoved = true;
  });

  $(global).on('mousemove', mousemove);

  $(global).smartscroll(function() {
    if (mousemoved) closeShare();
  });

  $(global).on('fonts:loaded', function() {
    console.log('pre')
    slideSize();
    console.log('size')
    $('body').css('visibility', 'visible');
  });

  $('#mc_embed_signup form').on('submit', mailchimpSubmit);

  $(hc.smoothScroller);

}(window, window.hc, jQuery));

(function(global, hc, $) {

  // utility methods
  // ---------------

  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  hc.debounce = function(func, threshold, execAsap) {
    var timeout;

    return function debounced () {
        var obj = this, args = arguments;
        function delayed () {
            if (!execAsap)
                func.apply(obj, args);
            timeout = null;
        };

        if (timeout)
            clearTimeout(timeout);
        else if (execAsap)
            func.apply(obj, args);

        timeout = setTimeout(delayed, threshold || 100);
    };
  };

  hc.once = function(fn) {
    var called = false;
    return function() {
      if (!called) {
        fn();
        called = true;
      }
    };
  };

  // smooth scrolling
  hc.smoothScroller = function() {
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
  };

  hc.firstScroll = (function() {
    var seenHash = false;
    return function() {
      return (!seenHash && window.location.hash && (seenHash = true));
    };
  })();

}(window, window.hc, jQuery));
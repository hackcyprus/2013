(function(global, hc, $) {

  // webfont loader
  // --------------

  WebFontConfig = {
    custom: { families: ['deming', 'sullivan'],
    urls: [ 'fonts/fonts.css' ] },

    typekit: {
      id: 'bie6xni'
    },

    loading: function(){
      $(global).trigger('fonts:loading');
    },

    active: function() {
      $(global).trigger('fonts:active');
    },

    inactive: function() {
      $(global).trigger('fonts:inactive');
    }
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

}(window, window.hc, jQuery));

(function(global, $) {

  // webfont loader
  // --------------

  WebFontConfig = {
    custom: { families: ['deming', 'sullivan'],
    urls: [ 'fonts/fonts.css' ] },

    typekit: {
      id: 'bie6xni'
    },

    active: function() {
      console.log('active')
      $(global).trigger('fonts:loaded');
    },

    inactive: function() {
      console.log('inactive')
      $(global).trigger('fonts:loaded');
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

}(window, jQuery));

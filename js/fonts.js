(function(global, $) {

  // webfont loader
  // --------------

  var deming = $.Deferred();
  var sullivan = $.Deferred();

  $.when(deming, sullivan).then(function() {
    $(global).trigger('fonts:loaded');
  });

  WebFontConfig = {
    custom: {
      families: ['deming', 'sullivan'],
      urls: [ '/css/fonts.css' ]
    },

    timeout: 10000,

    typekit: {
      id: 'bie6xni'
    },

    // we only care about our custom fonts loading, since they mostly dictate
    // dimensions on the page
    fontactive: function(family) {
      if (family == 'deming') deming.resolve();
      if (family == 'sullivan') sullivan.resolve();
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

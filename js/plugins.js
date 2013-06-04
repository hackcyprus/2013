(function(global, hc, $) {

  // jQuery plugins
  // --------------

  jQuery.fn.smartresize = function(fn){
    return fn? this.bind('resize', hc.debounce(fn)) : this.trigger('smartresize');
  };

  jQuery.fn.smartscroll = function(fn){
    return fn? this.bind('scroll', hc.debounce(fn)) : this.trigger('smartscroll');
  };

}(window, window.hc, jQuery));
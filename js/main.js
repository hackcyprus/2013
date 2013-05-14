$(".slide").each(function() {
  
  var contentHeight = $(this).find('.content').outerHeight();
  var slideHeight = $(window).outerHeight();
  var topPosition  = (slideHeight-contentHeight)/2;
  
  $(this).css("height", slideHeight);
  $(this).find(".content").css("top", topPosition);
  
});


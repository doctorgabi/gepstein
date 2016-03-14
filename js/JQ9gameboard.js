var main = function() {

  $('.more-btn').click(function(){
    $(this).next().toggle();
  });

  $('.more-menu .share').click(function(){
    $(this).next().toggle();
  });

  $('.notification').click(function(){
    $(this).addClass('active');
  });

};

$(document).ready(main);
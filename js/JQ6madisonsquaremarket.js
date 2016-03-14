var main = function(){
  $('.cart').click(function(){
    $('.active').toggle();
    $('.active').removeClass('active');
    $('.cart .dropdown-menu').toggle();
    $('.cart .dropdown-menu').addClass('active');
  });

   $('.account').click(function(){
    $('.active').toggle();
    $('.active').removeClass('active');
    $('.account .dropdown-menu').toggle();
    $('.account .dropdown-menu').addClass('active');

  });

  $('.help').click(function(){
    $('.active').toggle();
    $('.active').removeClass('active');
    $('.help .dropdown-menu').toggle();
    $('.help .dropdown-menu').addClass('active');

  });

};

$(document).ready(main);
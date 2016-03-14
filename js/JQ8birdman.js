var main = function() {
  $('.dropdown img').click(function(){
    $('.dropdown .dropdown-menu').toggle();
  });
}

$(document).ready(main);
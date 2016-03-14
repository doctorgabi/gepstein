var main = function() {
  $('form').submit(function() {

    var comment = $('input#comment').val();

    if(comment !== "") {
      var html = $('<li>').text(comment);
      $(html).prependTo($('ul.comments'));
      $('input#comment').val("");
    };

    return false;

  });
};

$(document).ready(main);
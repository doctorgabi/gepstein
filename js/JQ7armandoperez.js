var main = function() {
  $('.nav li').click(function() {
    var category = $(this).attr('class');

    $('.nav li').removeClass('active');

    $(this).addClass('active');
    if((category === "nav-consumer")||(category === "nav-mobile")||(category === "nav-commerce")||(category === "nav-enterprise")||(category === "nav-all")){
      $('.thumbnail').removeClass('selected');
    };
    if(category === "nav-consumer"){
      $('.consumer').addClass('selected');
    }else if(category === "nav-mobile"){
      $('.mobile').addClass('selected');
    }else if(category === "nav-commerce"){
      $('.commerce').addClass('selected');
    }else if(category === "nav-enterprise"){
      $('.enterprise').addClass('selected');
    }else if(category === "nav-all"){
    };


  });
};

$(document).ready(main);
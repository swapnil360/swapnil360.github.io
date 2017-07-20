$(document).ready(function(){
  // $('.home-navigation').find('ul').attr("style", "max-width: 0")
  //
  // $('.home-navigation').find('ul').animate({
  //   "max-width": "50em",
  // }, 400, function() {
  //   $('ul').attr('style', 'overflow: inherit');
  //   $('.nav-page-title').animate({
  //     "bottom": "120px",
  //     "opacity": "1",
  //     "transition": "none"
  //   }, 1)
  // });

  $('#home').click(function() {
    $(location).attr('href', 'index.html');
  })

  $('#portfolio').click(function() {
    $(location).attr('href', 'portfolio.html');
  })

  $('#skills').click(function() {
    $(location).attr('href', 'skills.html');
  })

  $('#experience').click(function() {
    $(location).attr('href', 'experience.html');
  })

  $('#contact').click(function() {
    $(location).attr('href', 'contact.html');
  })

  $('.professional-experience').find('h6').click(function() {
    $('.professional-experience').removeClass('professional-experience--expanded');
    $(this).parent().addClass('professional-experience--expanded');
  })

  $('.fa-times').click(function(event) {
    console.log($(this).parent('.professional-experience'));
    $(this).parent().removeClass('professional-experience--expanded');
  });
});

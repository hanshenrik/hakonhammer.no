var scrollSpeed = 500;

$(document).ready(function(){
  // Set copyright year to current year
  $( '#current-year' ).text( (new Date).getFullYear() );

  // Scroll smoothly to element with id matching clicked element
  $('.scroll-link').click(function(e) {
    e.preventDefault();
    var id = $(this).attr('href');
    $('html, body').animate({ scrollTop: $( id ).offset().top - 20 }, scrollSpeed);
  });

  // $('.highlight-link').click(function(e) {
  //   e.preventDefault();
  //   var id = $(this).attr('href');
  //   $( id ).css('background', 'yellow');
  // });
})

var scrollSpeed = 500;
var backgrounds = [0, 1, 2, 3, 4, 5];
var colors = ["#14061b", "#032928", "#fdfdfd", "#c6ddff", "#e1d9e7"];

var currentBackgroundIndex = 0;
var currentColorIndex = 0;

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

  $('#no-background').click(function() {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    $('body').css('background', colors[currentColorIndex])
  })
  $('#toggle-background').click(function() {
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
    $('body').css('background', 'url(../images/background-'+currentBackgroundIndex+'.jpg)')
  })
})

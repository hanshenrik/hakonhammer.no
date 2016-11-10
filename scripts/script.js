
$(document).ready(function(){
  // Set copyright year to current year
  $( '#current-year' ).text( (new Date).getFullYear() );

  $('.category-content').click(function(e) {
    $(this).find('.category-text').slideToggle();
    $(this).find('.read-more-icon').toggleClass('fa-rotate-180');
  });

})


$(document).ready(function(){
  // Set copyright year to current year
  $( '#current-year' ).text( (new Date).getFullYear() );

  $('.category-item').click(function(e) {
    $(this).find('.category-content').toggleClass('open');
    $(this).find('.category-text').stop().slideToggle();
    $(this).find('.read-more-icon').toggleClass('fa-rotate-180');
  });
})

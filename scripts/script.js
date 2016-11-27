
$(document).ready(function(){
  // Set copyright year to current year
  $( '#current-year' ).text( (new Date).getFullYear() );

  $('.category-item').hover(function(e) {
    $(this).find('.category-text').stop().slideToggle();
    $(this).find('.read-more-icon').toggleClass('fa-rotate-180');
    $(this).parent().toggleClass('open');
  });

})

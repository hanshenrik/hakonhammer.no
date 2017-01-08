var animationDuration = 1000;
var fadeInDelay = animationDuration;
var openFirstCategoryDelay = 2*fadeInDelay;

jQuery.fn.extend({
  fadeInOpacity: function() {
    $( this ).animate( { opacity: 1 }, animationDuration );
  }
});

$( document ).ready( function() {
  // Fade in the whole shebang after the DOM is ready
  $( '#wrapper ').fadeIn( animationDuration, function() {
    setTimeout( function() {
      $( '.category-item' ).first().click();
    }, openFirstCategoryDelay);
  });

  $( '.category-item' ).click( function( e ) {
    $( this ).toggleClass( 'open closed' );
    $( this ).find( '.category-text' ).stop().slideToggle();
    $( this ).find( '.read-more-icon' ).toggleClass( 'fa-chevron-circle-down fa-times-circle' );
  });

  // Set copyright year to current year
  $( '#current-year' ).text( (new Date).getFullYear() );
})

// $(window).on( 'load' , function() {
//   $( '.contact-item' ).each( function( i ) {
//     var item = $( this );
//     setTimeout( function() {
//       console.log(i)
//       item.fadeInOpacity();
//     }, i * fadeInDelay);
//   });
// });

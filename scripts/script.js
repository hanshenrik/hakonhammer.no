var animationDuration = 500;
var fadeInDelay = animationDuration;
var openFirstCategoryDelay = 2*fadeInDelay;

jQuery.fn.extend({
  fadeInOpacity: function() {
    $( this ).animate( { opacity: 1 }, animationDuration );
  }
});

$( document ).ready( function() {
  // Set copyright year to current year
  $( '#current-year' ).text( (new Date).getFullYear() );

  $( '.category-item' ).click( function( e ) {
    $( this ).toggleClass( 'open closed' );
    $( this ).find( '.category-text' ).stop().slideToggle();
    $( this ).find( '.read-more-icon' ).toggleClass( 'fa-chevron-circle-down fa-times-circle' );
  });

  setTimeout( function() {
    $( '.category-item' ).first().click();
  }, openFirstCategoryDelay);
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

var animationDuration = 1800;
var fadeInDelay = animationDuration;

jQuery.fn.extend({
  fadeInOpacity: function() {
    $( this ).animate( { opacity: 1 }, animationDuration );
  }
});

$( document ).ready( function() {
  // Fade in the whole shebang after the DOM is ready
  $( '#wrapper ').fadeIn( animationDuration, function() {

    var numberOfContactItems = 0;
    $( '.contact-item' ).each( function( i ) {
      var item = $( this );
      setTimeout( function() {
        item.fadeInOpacity();
      }, i * fadeInDelay);
      numberOfContactItems += 1;
    });

    setTimeout( function() {
      $( '.category-item' ).first().click();
    }, numberOfContactItems * fadeInDelay);

    setTimeout( function() {
      $( '.scroll-down-icon > .fa' ).addClass('animated fadeInDown');
    }, numberOfContactItems * fadeInDelay + 5000);
  });

  $('.category-grid').on('click', '.category-item', function( e ) {
    var $categoryItem = $( this ).closest('.category-item');
    $categoryItem.toggleClass( 'open closed' );
    $categoryItem.find( '.category-text' ).stop().slideToggle();
    $categoryItem.find( '.read-more-icon' ).toggleClass( 'fa-chevron-circle-down fa-times-circle open closed' );
  }).find('.category-text').on('click', function( e ) {
    e.stopPropagation();
  });

  // Scroll smoothly to element with id matching clicked element
  $( '.scroll-down-icon' ).click(function( e ) {
    $( 'html, body' ).animate({ scrollTop: $( '#' + $(this).attr('data-target') ).offset().top }, animationDuration/2);
  });

  // Set copyright year to current year
  $( '#current-year' ).text( (new Date).getFullYear() );
});

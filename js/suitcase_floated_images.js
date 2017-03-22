/**
 * Function for adding the appropriate margins to floated images
 * And floated images with captions.
 */

(function($) {
  $(document).ready( function() {
    $('figure.image')
      .filter(function() {
        return $(this).css('float') == 'left';
      })
      .addClass('floated-left');

    $('figure.image')
      .filter(function() {
        return $(this).css('float') =='right';
      })
      .addClass('floated-right');

    $('.content img')
      .filter(function() {
        return $(this).css('float') == 'left';
      })
      .addClass('floated-left');

    $('.content img')
      .filter(function() {
        return $(this).css('float') == 'right';
      })
      .addClass('floated-right');
  });
})(jQuery);

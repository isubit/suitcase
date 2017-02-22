/**
 * Function for adding the appropriate margins to floated images
 * And floated images with captions.
 */

(function($) {
  $(document).ready( function() {
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

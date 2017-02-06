/**
 * Function for resizing view rows injected with luggage-grid class
 */

(function ($) {
  Drupal.behaviors.suitcaseGridHeight = {
    attach: function (context, settings) {
      $('body', context).once('suitcaseGridHeight', function () {
        $(window).bind('load resize', function () {
          // Check to make sure this isn't happening on mobile
          if (!Drupal.behaviors.hasOwnProperty('omegaMediaQueries') || Drupal.omega.getCurrentLayout() != 'mobile') {
            // Check to make sure this isn't happening on views without the luggage-grid class
            $($('.luggage-grid').get().reverse()).each(function () {
              var maxHeight = 0;
              for (var i = 1; i < $(this).find('.luggage-gridrow').length; i += 2) {
                var even = i + 1;
                // Need this to reset height for responsiveness
                $(this).find('.views-row-' + i + ', .views-row-' + even).height('auto');
                maxHeight = $(this).find('.views-row-' + i).outerHeight() > $(this).find('.views-row-' + even).outerHeight() ? $(this).find('.views-row-' + i).outerHeight() : $(this).find('.views-row-' + even).outerHeight();
                $(this).find('.views-row-' + i + ', .views-row-' + even).height(maxHeight);
              }
            });
          }
        });
      });
    }
  };
})(jQuery);

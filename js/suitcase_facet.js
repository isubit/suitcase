/**
 * @todo
 */

(function($) {
    /**
     * @todo
     */
    Drupal.behaviors.suitcaseFacet = {
        attach: function (context) {
            $('body', context).once('suitcaseFacet', function() {
                $('.block-facetapi').click(function(e) {
                    if(!$(e.target).is('a')) {
                        $(this).find('.item-list').slideToggle(200);
                    }
                });

                $('.block-apachesolr-search').click(function(e) {
                    if(!$(e.target).is('a')) {
                        $(this).find('.item-list').slideToggle(200);
                    }
                });
            });
        }
    };
})(jQuery);

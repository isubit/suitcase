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
                $('.block-facetapi.contextual-links-region .block-title').click(function() {
                    console.log($(this).eq(), $(this).index());
                    $(this).parent().find('.item-list').slideToggle(200);
                });
            });
        }
    };
})(jQuery);

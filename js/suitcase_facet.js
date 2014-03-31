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
                $('.contextual-links-region .block-title').click(function() {
                    console.log($(this).eq(), $(this).index());
                    $(this).parent().find('ul.facetapi-facetapi-links').slideToggle(200);
                });
            });
        }
    };
})(jQuery);

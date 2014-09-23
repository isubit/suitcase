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
                $('aside section.block').addClass('js-suitcase-facet');

                $('.js-suitcase-facet .block-title').each(function() {
                    $(this).append('<span class="caret"></span>');
                }).bind('click touchend', function(e) {
                    $(this).parent().find('.content').toggle();
                });

                if($(window).width() < 980) {
                    $('.js-suitcase-facet .content').toggle();
                }
            });
        }
    };
})(jQuery);

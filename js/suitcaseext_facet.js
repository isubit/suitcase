/**
 * @todo
 */

(function($) {
    /**
     * @todo
     */
    Drupal.behaviors.suitcaseextFacet = {
        attach: function (context) {
            $('body', context).once('suitcaseextFacet', function() {
                $('.zone-content section.block').addClass('js-suitcaseext-facet');
                var touched = false;

                $('.js-suitcaseext-facet .block-title').each(function() {
                    $(this).append('<span class="caret"></span>');
                }).bind('click touchend', function(e) {
                    if(touched) {e.preventDefault();touched=false;return;}
                    $(this).parent().find('.content').toggle();
                    touched = (e.type == 'touchend');
                });

                if($(window).width() < 980) {
                    $('.js-suitcaseext-facet .content').toggle();
                }
            });
        }
    };
})(jQuery);

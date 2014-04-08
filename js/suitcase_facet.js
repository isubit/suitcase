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
                if($(window).width() < 980) {
                    $('.item-list').addClass('item-list-js-enabled');
                }

                $(window).resize(function() {
                    if($(this).width() > 979) {
                        $('.item-list').removeClass('item-list-js-enabled');
                    }
                });

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

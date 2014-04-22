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
                $('.region-sidebar-first').find('.block-facetapi').addClass('js-enabled-facet');
                $('.region-sidebar-first').find('.block-apachesolr-search').addClass('js-enabled-facet');
                console.log($('.region-sidebar-first').find('.block-apachesolr-search'));

                var $itemList = $('.js-enabled-facet .item-list'),
                    collapsed = 'js-enabled-collapsed',
                    isTouchedAlready = false;

                if($(window).width() < 980) {
                    $itemList.addClass(collapsed);
                }

                $(window).resize(function() {
                    if($(this).width() > 979) {
                        $itemList.removeClass(collapsed);
                    } else {
                        if(!$itemList.hasClass(collapsed)) {
                            $itemList.addClass(collapsed);
                        }
                    }
                });

                $('.js-enabled-facet h2.block-title').bind('click touchend', function(e) {
                    if(!$(e.target).is('a')) {
                        $(this).parent().find('.item-list').slideToggle(200);
                    }
                    if(!isTouchedAlready) {

                    } else {
                        e.preventDefault();
                        e.stopPropagation();
                    }
                    console.log(e.type);
                    isTouchedAlready = (e.type == 'touchend');
                }).bind('touchstart', function(e) {
                    e.preventDefault();
                });

//                $('.block-apachesolr-search').click(function(e) {
//                    if(!$(e.target).is('a')) {
//                        $(this).find('.item-list').slideToggle(200);
//                    }
//                });
            });
        }
    };
})(jQuery);

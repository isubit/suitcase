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

                var $itemList = $('.js-enabled-facet .item-list'),
                    collapsed = 'js-enabled-collapsed',
                    isTouchedAlready = false,
                    arrow_dir,
                    dwnimg = '/sites/all/themes/suitcase/images/white-arrow-down.gif',
                    upimg = '/sites/all/themes/suitcase/images/white-arrow-up.gif',
                    arrowimg = 'collapsed-indicator-img',
                    arrowclass = '.' + arrowimg;

                if($(window).width() < 980) {
                    addCollapse($itemList);
                } else {
                    removeCollapse($itemList);
                }

                $(window).resize(function() {
                    if($(this).width() > 979) {
                        removeCollapse($itemList);
                    } else {
                        if(!isCollapsed($itemList)) {
                            addCollapse($itemList);
                        }
                    }
                });

                $('.js-enabled-facet h2.block-title').bind('click touchend', function(e) {
                    if(!$(e.target).is('a')) {
                        toggleCollapse($(this).parent().find('.item-list'));
                    }
                    if(isTouchedAlready) {
                        e.preventDefault();
                        e.stopPropagation();
                    }
                    isTouchedAlready = (e.type == 'touchend');
                }).bind('touchstart', function(e) {
                    e.preventDefault();
                });

                function addCollapse($items) {
                    $items.addClass(collapsed);
                    $items.parent().parent().each(function() {
                        if($(this).hasClass('block-inner clearfix') && $(this).find(arrowclass).length == 0) {
                            $(this).find('h2').append('<img src="' + dwnimg + '" class="' + arrowimg + '">');
                        } else if($(this).find(arrowclass).length > 0) {
                            $(this).find(arrowclass).attr('src', dwnimg);
                        }
                    });
                    arrow_dir = 'down';
                }

                function removeCollapse($items) {
                    $items.removeClass(collapsed);
                    $items.parent().parent().each(function() {
                        if($(this).hasClass('block-inner clearfix') && $(this).find(arrowclass).length == 0) {
                            $(this).find('h2').append('<img src="' + upimg + '" class="' + arrowimg + '">');
                        } else if($(this).find(arrowclass).length > 0) {
                            $(this).find(arrowclass).attr('src', upimg);
                        }
                    });
                    arrow_dir = 'up';
                }

                function toggleCollapse($item) {
                    if(arrow_dir == 'down') {
                        removeCollapse($item);
                    } else {
                        addCollapse($item);
                    }
                }

                function isCollapsed($items) {
                    return $items.hasClass(collapsed);
                }
            });
        }
    };
})(jQuery);

/**
 * @todo
 */

(function($) {
    /**
     * @todo
     */
    Drupal.behaviors.suitcaseStickyMenu = {
        attach: function (context) {
            $('body', context).once('suitcaseStickyMenu', function() {
                var $menu = $('#zone-menu'),
                    admin_menu_height = ($('#admin-menu').length) ? $('#admin-menu').height() : 0,
                    menu_offset_top = (admin_menu_height > 0) ? $menu.offset().top - admin_menu_height : $menu.offset().top,
                    menu_offset_left = $menu.offset().left,
                    touch_flag = false,
                    MIN_WINDOW_WIDTH = 740;

                $(window).resize(function() {
                    admin_menu_height = ($('#admin-menu').length) ? $('#admin-menu').height() : 0;
                    menu_offset_top = (admin_menu_height > 0) ? $menu.offset().top - admin_menu_height : $menu.offset().top;
                    menu_offset_left = $menu.offset().left;
                    if($(this).width() < MIN_WINDOW_WIDTH) {
                        console.log(true);
                        resetStickyMenuPosition();
                    }
                });

                $(window).bind('scroll', function(e) {
                    if(!touch_flag) {
                        updateStickyMenuPosition();
                    }
                }).bind('touchmove', function(e) {
                    touch_flag = true;

                    updateStickyMenuPosition();
                }).bind('touchend', function(e) {
                    updateStickyMenuPosition();
                });

                $(document).bind('focus', 'select, input, textarea', function(e) {
                    $menu.css({ 'position': '', 'top': '', 'padding-left': '', 'background': '', 'width': '', 'z-index': ''});
                    $('#zone-menu-wrapper').css('height', '');
                })

                function updateStickyMenuPosition() {
                    if($(this).width() < MIN_WINDOW_WIDTH) {
                        resetStickyMenuPosition();
                    } else {
                        var scrollTop = $(window).scrollTop();

                        if(scrollTop > menu_offset_top) {
                            console.log('here');
                            $('#zone-menu-wrapper').css('height', $('#zone-menu-wrapper').height());
                            $menu.css({ 'position': 'fixed', 'top': admin_menu_height, 'padding-left': menu_offset_left, 'background': '#CB1A2A', 'background-image': 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.28))',
                                'background-position': 'center bottom', 'background-repeat': 'repeat-x, repeat', 'width': '100%', 'z-index': 3, 'box-shadow': '0 0.1em 0.25em #333'});
                        }
                        else {
                            resetStickyMenuPosition();
                        }
                    }
                }

                function resetStickyMenuPosition() {
                    console.log('reset');
                    $menu.css({ 'position': '', 'top': '', 'padding-left': '', 'background': '', 'background-image': '',
                        'background-position': '', 'background-repeat': '', 'width': '', 'z-index': '', 'box-shadow': 'none'});
                    $('#zone-menu-wrapper').css('height', '');
                }
            });
        }
    };
})(jQuery);
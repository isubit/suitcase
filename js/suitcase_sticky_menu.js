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
                    touch_flag = false;

                $(window).resize(function() {
                    admin_menu_height = ($('#admin-menu').length) ? $('#admin-menu').height() : 0;
                    menu_offset_top = (admin_menu_height > 0) ? $menu.offset().top - admin_menu_height : $menu.offset().top;
                    menu_offset_left = $menu.offset().left;
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

//                window.addEventListener('scroll', function(e) {
//                    if(!touch_flag) {
////                        console.log("Scrolling");
//                        updateStickyMenuPosition();
//                    }
////                    e.preventDefault();
//                }, false);
//
//                window.addEventListener('touchmove', function(e) {
////                    console.log("Moving");
//                    touch_flag = true;
//
//                    updateStickyMenuPosition();
////                    e.preventDefault();
//                }, false);
//
//                window.addEventListener('touchend', function(e) {
//                    updateStickyMenuPosition();
//                });

                function updateStickyMenuPosition() {
                    if($(this).width() < 740) return;

                    var scrollTop = $(window).scrollTop();

                    if(scrollTop > menu_offset_top) {
                        $('#zone-menu-wrapper').css('height', $('#zone-menu-wrapper').height());
                        $menu.css({ 'position': 'fixed', 'top': admin_menu_height, 'padding-left': menu_offset_left, 'background': '#CB1A2A', 'background-image': 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.28))',
                            'background-position': 'center bottom', 'background-repeat': 'repeat-x, repeat', 'width': '100%', 'z-index': 3});
                    }
                    else {
                        $menu.css({ 'position': '', 'top': '', 'padding-left': '', 'background': '', 'background-image': '',
                            'background-position': '', 'background-repeat': '', 'width': '', 'z-index': ''});
                        $('#zone-menu-wrapper').css('height', '');
                    }
                }

//                window.addEventListener('focusin', function() {
//                    console.log("Here");
//                    updateStickyMenuPosition();
//                });
            });
        }
    };
})(jQuery);
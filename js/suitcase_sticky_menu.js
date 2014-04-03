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
                    menu_offset_left = $menu.offset().left;

                $(window).resize(function() {
                    admin_menu_height = ($('#admin-menu').length) ? $('#admin-menu').height() : 0;
                    menu_offset_top = (admin_menu_height > 0) ? $menu.offset().top - admin_menu_height : $menu.offset().top;
                    menu_offset_left = $menu.offset().left;
                });

                $(window).scroll(function() {
                    var scrollTop = $(window).scrollTop();

                    if(scrollTop > menu_offset_top) {
                        $('#zone-menu-wrapper').css('height', $('#zone-menu-wrapper').height());
                        $menu.css({ 'position': 'fixed', 'top': admin_menu_height, 'padding-left': menu_offset_left, 'background': '#333', 'width': '100%', 'z-index': 1});
                    }
                    else {
                        $menu.css({ 'position': 'relative', 'top': '', 'padding-left': '', 'background': '', 'width': '', 'z-index': ''});
                        $('#zone-menu-wrapper').css('height', '');
                    }
                });
            });
        }
    };
})(jQuery);
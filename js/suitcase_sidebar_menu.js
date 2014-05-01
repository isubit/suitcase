/**
 * @todo
 */

(function($) {
    /**
     * @todo
     */
    Drupal.behaviors.suitcaseSidebarMenu = {
        attach: function (context) {
            $('body', context).once('suitcaseSidebarMenu', function() {
                var isTouchedAlready = false;

                $('#main-menu-categories-toggle').bind('click touchend', function(e) {
                    var togglePos = $(this).offset(),
                        sidebar_offset = parseFloat($('#zone-side-menu-wrapper').width()),
                        slide_time = 200;

                    if(parseInt($('#zone-side-menu-wrapper').css('left')) == 0) {
                        // Hide Menu
                        $('#zone-side-menu-wrapper').animate({
                            left: -sidebar_offset
                        }, slide_time);

                        $('.page').animate({
                            left: 0
                        }, slide_time);

                        $('#zone-menu').animate({
                            left: 0
                        }, slide_time);
                    } else {
                        // Show Menu
                        if(togglePos.left > sidebar_offset) sidebar_offset = togglePos.left;
                        $('#zone-side-menu-wrapper')
                            .width(sidebar_offset)
                            .css("left", -sidebar_offset)
                            .animate({
                                left: 0
                            }, slide_time);

                        $('.page').animate({
                            left: sidebar_offset - togglePos.left
                        }, slide_time);

                        $('#zone-menu').animate({
                            left: sidebar_offset - togglePos.left
                        }, slide_time);

                        $('#zone-side-menu-wrapper ul.menu li').css('width', sidebar_offset - 30);
                    }

                    isTouchedAlready = (e.type == 'touchend');
                }).bind('touchstart', function(e) {
                    e.preventDefault();
                }).show();
            });
        }
    };
})(jQuery);
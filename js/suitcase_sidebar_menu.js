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
//                $('#main-menu-menu-toggle').click(function() {
//                    $('#block-system-main-menu').slideToggle(200);
//                });
                var isTouchedAlready = false;

                $('#main-menu-categories-toggle').bind('click touchend', function(e) {
                    if(!isTouchedAlready) {

                    }

                    var togglePos = $(this).offset(),
                        sidebar_offset = parseFloat($('#zone-side-menu-wrapper').width()),
                        sticky_menu_offset = $('#zone-menu').offset().left,
                        slide_time = 200;

                    if(parseInt($('#zone-side-menu-wrapper').css('left')) == 0) {
                        // Hide Menu
                        console.log("Hide");
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
                        console.log("Show");

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
                    }

                    console.log(isTouchedAlready);
                    isTouchedAlready = (e.type == 'touchend');
                    console.log(isTouchedAlready);
                }).bind('touchstart', function(e) {
                    e.preventDefault();
                }).show();
            });
        }
    };
})(jQuery);
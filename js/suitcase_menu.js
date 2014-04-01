/**
 * @todo
 */

(function($) {
    /**
     * @todo
     */
    Drupal.behaviors.suitcaseMenu = {
        attach: function (context) {
            $('body', context).once('suitcaseMenu', function() {
//                $('#main-menu-menu-toggle').click(function() {
//                    $('#block-system-main-menu').slideToggle(200);
//                });

                $('#main-menu-categories-toggle').click(function() {
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
                    }
                });
            });
        }
    };
})(jQuery);
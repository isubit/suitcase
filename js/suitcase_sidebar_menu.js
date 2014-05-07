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
                var isTouchedAlready = false,
                    slide_time = 200;

                $('#main-menu-categories-toggle').bind('click touchend', function(e) {
                    if(isTouchedAlready) {
                        isTouchedAlready = false;
                        return;
                    }
                    
                    var togglePos = $(this).offset(),
                        sidebar_offset = parseFloat($('#zone-side-menu-wrapper').width());

                    if(parseInt($('#zone-side-menu-wrapper').css('left')) == 0) {
                        HideMenu(sidebar_offset);
                    } else {
                        ShowMenu(togglePos, sidebar_offset);
                    }

                    isTouchedAlready = (e.type == 'touchend');
                }).bind('touchstart', function(e) {
                    e.preventDefault();
                }).show();

                function HideMenu(sidebar_offset) {
                    $('#zone-side-menu-wrapper').stop().animate({
                        left: -sidebar_offset
                    }, slide_time);

                    $('.page').stop().animate({
                        left: 0
                    }, slide_time);

                    $('#zone-menu').stop().animate({
                        left: 0
                    }, slide_time);

                    $('body:not(#zone-side-menu-wrapper)').unbind('click touchstart');
                }

                function ShowMenu(togglePos, sidebar_offset) {
                    if(togglePos.left > sidebar_offset) sidebar_offset = togglePos.left;
                    $('#zone-side-menu-wrapper')
                        .width(sidebar_offset)
                        .css("left", -sidebar_offset)
                        .stop().animate({
                            left: 0
                        }, slide_time);

                    $('.page').stop().animate({
                        left: sidebar_offset - togglePos.left
                    }, slide_time);

                    $('#zone-menu').stop().animate({
                        left: sidebar_offset - togglePos.left
                    }, slide_time);

                    $('#zone-side-menu-wrapper .content>ul>li').css('width', sidebar_offset - 15);
                    setTimeout(function() {
                        $('body').bind('click touchstart', function(e) {
                            if(e.pageX > sidebar_offset) {
                                HideMenu(parseFloat($('#zone-side-menu-wrapper').width()));
                            }
                        });
                    }, 400);

                }
            });
        }
    };
})(jQuery);
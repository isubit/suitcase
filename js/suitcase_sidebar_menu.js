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
                    slide_time = 200,
                    $sidebar_button = $('nav.navigation ul li a:contains(≡)'),
                    sidebar_offset = 300,
                    top;

                $sidebar_button.bind('click touchend', function(e) {
                    if(isTouchedAlready) {
                        isTouchedAlready = false;
                        return;
                    }

                    var togglePos = $sidebar_button.offset();
//                    var sidebar_offset = parseFloat($('#zone-side-menu-wrapper').width());

                    if(parseInt($('#zone-side-menu-wrapper').css('left')) == 0) {
                        HideMenu(sidebar_offset);
                    } else {
                        ShowMenu(togglePos, sidebar_offset);
                    }

                    isTouchedAlready = (e.type == 'touchend');
                }).bind('touchstart', function(e) {
                    e.preventDefault();
                }).show()
                    .removeAttr('href')
                    .css('font-weight', 'bold')
                    .css('font-size', '1.5em');

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
                    $('#zone-side-menu-wrapper')
                        .width(sidebar_offset)
                        .css("left", -sidebar_offset)
                        .stop().animate({
                            left: 0
                        }, slide_time);

                    if(sidebar_offset > togglePos.left) {
                        $('.page').stop().animate({
                            left: sidebar_offset - togglePos.left + 7
                        }, slide_time);
                    }

                    $('#zone-menu').stop().animate({
                        left: sidebar_offset - togglePos.left
                    }, slide_time);

                    $('#zone-side-menu-wrapper .content>ul>li').css('width', sidebar_offset);
//                    setTimeout(function() {
//                        $('body').bind('click touchstart', function(e) {
//                            if(e.pageX > sidebar_offset) {
//                                HideMenu(parseFloat($('#zone-side-menu-wrapper').width()));
//                            }
//                        });
//                    }, 400);
                    if($('#admin-menu')) {
                        setSideMenuCloseButtonPosition();
                        setSideMenuWrapperPaddingTop();
                    }

                }

                function setSideMenuCloseButtonPosition() {
                    $('#side-menu-close-button').css('top', $('#admin-menu').height());
                }

                function setSideMenuWrapperPaddingTop() {
                    $('#zone-side-menu-wrapper').css('padding-top', $('#admin-menu').height());
                }

                if($('#admin-menu')) {
                    top = $('#admin-menu').height() + 5;
                    setSideMenuWrapperPaddingTop();
                } else {
                    top = 5;
                }

                $(window).resize(function() {
                    if(parseInt($('#zone-side-menu-wrapper').css('left')) == 0) {
                        HideMenu(sidebar_offset);
                    }
                });

                // Close Button
                $('#zone-side-menu-wrapper').append('<img src="' + Drupal.settings.basePath + 'sites/all/themes/suitcase/images/close-button-white.png" id="side-menu-close-button" style="top: ' + top + 'px">');
                $('#side-menu-close-button').click(function() {
                    HideMenu(sidebar_offset);
                });
            });
        }
    };
})(jQuery);
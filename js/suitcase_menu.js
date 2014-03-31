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
                $('#main-menu-menu-toggle').click(function() {
                    $('#block-system-main-menu').slideToggle(200);
                });

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
                        $('#zone-side-menu-wrapper').animate({
                            left: 0
                        }, slide_time);

                        $('.page').animate({
                            left: sidebar_offset - togglePos.left
                        }, slide_time);
                    }
//                    $('#block-menu-menu-categories').slideToggle(200);

                });
//                $('.mobile-menu-item').each(function() {
//                    $(this).click(function() {
////                        $('.region-menu-inner').children().eq($(this).index()).slideToggle(200);
//                    });
//                });
            });
//            $('body', context).once('omega-equalheights', function () {
//                $(window).bind('resize.omegaequalheights', function () {
//                    $($('.equal-height-container').get().reverse()).each(function () {
//                        var elements = $(this).children('.equal-height-element').css('height', '');
//
//                        if (!Drupal.behaviors.hasOwnProperty('omegaMediaQueries') || Drupal.omega.getCurrentLayout() != 'mobile') {
//                            var tallest = 0;
//
//                            elements.each(function () {
//                                if ($(this).height() > tallest) {
//                                    tallest = $(this).height();
//                                }
//                            }).each(function() {
//                                if ($(this).height() < tallest) {
//                                    $(this).css('height', tallest);
//                                }
//                            });
//                        }
//                    });
//                }).load(function () {
//                    $(this).trigger('resize.omegaequalheights');
//                });
//            });
        }
    };
})(jQuery);
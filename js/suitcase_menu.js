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
                console.log($('.region-menu-inner'));
                $('.mobile-menu-item').each(function() {
                    $(this).click(function() {
                        $('.region-menu-inner').children().eq($(this).index()).slideToggle(200);
                    });
                });
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
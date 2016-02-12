/**
 * @todo
 */

(function($) {
    /**
     * @todo
     */
    Drupal.behaviors.suitcaseMegaMenu = {
        attach: function (context) {
            $('body', context).once('suitcaseMegaMenu', function() {
                var $button = $('.region-mega-menu .content>.menu>li.first>a'),
                    $megaMenu = $('.region-mega-menu .content>.menu>li.first>.menu');
                var touched = false;

                $button.attr('href', '#');

                $button.bind('click touchend', function(e) {
                    if(touched) {e.preventDefault();touched=false;return;}
                    $megaMenu.toggleClass('show');
                    touched = (e.type == 'touchend');
                });
            });
        }
    };
})(jQuery);

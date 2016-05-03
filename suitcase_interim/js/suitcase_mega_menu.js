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

                $button.attr('href', '#').bind('click touchend', function(e) {
                    e.stopPropagation();
                });

                $button.bind('click touchend', function(e) {
                    if(touched) {e.preventDefault();touched=false;return;}

                    $button
                        .parent()
                        .toggleClass('active');
                    $megaMenu
                        .click(megaMenuClicked)
                        .toggleClass('show');
                        setTimeout(function() {
                            $('body')
                                .bind('click touchend', bodyClicked);
                        }, null);
                    touched = (e.type == 'touchend');
                });

                function megaMenuClicked(e) {
                    e.stopPropagation();
                }

                function bodyClicked() {
                    $button.parent().toggleClass('active');
                    $megaMenu.toggleClass('show');
                    $megaMenu.unbind('click touchend', megaMenuClicked);
                    $('body').unbind('click touchend', bodyClicked);
                }
            });
        }
    };
})(jQuery);

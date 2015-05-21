/**
 * Adds functionality to collapse the menu when viewing on a mobile device
 * Author: Ryan Frahm
 * Date: 8/11/14
 */

(function($) {
    Drupal.behaviors.suitcaseextCollapsibleMenu = {
        attach: function (context) {
            $('body', context).once('suitcaseextCollapsibleMenu', function() {
                if($('#main-menu > li').length > 1) {
                    var li = '<li id="suitcaseext-main-menu-dropdown-toggle"><a>...</a></li>';
                    var touched = false;

                    $('#main-menu > li:first').after(li);

                    $('#suitcaseext-main-menu-dropdown-toggle').bind('click touchend', function(e) {
                        if(touched) {touched=false;return;}
                        $('.main-menu-dropdown-item').toggleClass('hide');
                        touched = (e.type == 'touchend');
                    }).nextAll().addClass('main-menu-dropdown-item').addClass('hide');
                }
            });
        }
    };
})(jQuery);

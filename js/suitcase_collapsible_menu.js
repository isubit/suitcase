/**
 * Adds functionality to collapse the menu when viewing on a mobile device
 * Author: Ryan Frahm
 * Date: 8/11/14
 */

(function($) {
    Drupal.behaviors.suitcaseCollapsibleMenu = {
        attach: function (context) {
            $('body', context).once('suitcaseCollapsibleMenu', function() {
            	var li = '<li id="suitcase-main-menu-dropdown-toggle"><a>...</a></li>';

                $('#main-menu > li:first').after(li);

                $('#suitcase-main-menu-dropdown-toggle').bind('click touchend', function(e) {
                    $('.main-menu-dropdown-item').toggleClass('hide');
                }).nextAll().addClass('main-menu-dropdown-item').addClass('hide');
            });
        }
    };
})(jQuery);

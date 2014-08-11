/**
 * Adds functionality to collapse the menu when viewing on a mobile device
 * Author: Ryan Frahm
 * Date: 8/11/14
 */

(function($) {
    Drupal.behaviors.suitcaseCollapsibleMenu = {
        attach: function (context) {
            $('body', context).once('suitcaseCollapsibleMenu', function() {
            	var $mainmenu = $('#main-menu'), // <ul> that holds menu links
            		li = '<li id="menu-dropdown-element"><a>...</a></li>',
                    collapsed;
            	CheckWindowSize();

            	$(window).resize(function() {
                    CheckWindowSize();
                });

            	function CheckWindowSize() {
            		if($(window).width() < 740) {
                        // Add another clickable dropdown element
                        if(!collapsed) {
                            AddMenuDropdownButton();
                            HideMenu();
                            collapsed = true;
                        }
                    } else {
                        if(collapsed) {
                            $('#menu-dropdown-element').remove();
                            ShowMenu();
                            collapsed = false;
                        }
                    }
            	}

                function AddMenuDropdownButton() {
                    $('#main-menu > li:first').after(li);
                    $('#menu-dropdown-element').click(function() {
                        if(collapsed) {
                            // Show dropdown
                            ShowMenu();
                            collapsed = false;
                        } else {
                            // Hide dropdown
                            HideMenu();
                            collapsed = true;
                        }
                    });
                }

                function HideMenu() {
                    var hide=false;
                    $('#main-menu > li').each(function() {
                        if(hide) {
                            $(this).hide();
                        }
                        if($(this).attr('id') == 'menu-dropdown-element') {
                            hide = true;
                        }
                    });
                }

                function ShowMenu() {
                    $('#main-menu > li').show();
                }
            });
        }
    };
})(jQuery);

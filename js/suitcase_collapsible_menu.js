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
            		li = '<li id="menu-dropdown-element"><a>...</a></li>';
            	CheckWindowSize();

            	$(window).resize(function() {
                    CheckWindowSize();
                });

            	function CheckWindowSize() {
            		if($(window).width() < 740) {
                        // Add another clickable dropdown element
                        if(!$('#menu-dropdown-element').length) {
                            AddMenuDropdownButton();
                        }
                        HideMenu();
                    } else {
                        $('#menu-dropdown-element').remove();
                        ShowMenu();
                    }
            	}

                function AddMenuDropdownButton() {
                    $('#main-menu > li:first').after(li);
                    $('#menu-dropdown-element').click(function() {
                        console.log($('.js-enabled-collapsed').length);
                        if($('.js-enabled-collapsed').length) {
                            ShowMenu();
                        } else {
                            HideMenu();
                        }
                    });
                }

                function HideMenu() {
                    var hide=false;
                    $('#main-menu > li').each(function() {
                        if(hide) {
                            $(this).addClass('js-enabled-collapsed');
                        }
                        if($(this).attr('id') == 'menu-dropdown-element') {
                            hide = true;
                        }
                    });
                }

                function ShowMenu() {
                    $('#main-menu > li').removeClass('js-enabled-collapsed');
                }
            });
        }
    };
})(jQuery);

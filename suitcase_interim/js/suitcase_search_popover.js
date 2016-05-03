/**
 * @todo
 */

(function($) {
    /**
     * @todo
     */
    Drupal.behaviors.suitcaseSearchPopover = {
        attach: function (context) {
            $('body', context).once('suitcaseSearchPopover', function() {
                var $searchBox = $('.region-search .search-form .form-text'),
                    $popover = $('.region-search .popover');

                $searchBox.focus(function() {
                    $popover.show();
                }).blur(function() {
                    setTimeout(function() {
                        $popover.hide()
                    }, 100);
                });
            });
        }
    };

    $(document).ajaxSuccess(function(res, e) {
        console.log(res, e);
    });
})(jQuery);

/**
 * Function for resizing view rows injected with luggage-grid class
 */

(function($) {
Drupal.behaviors.suitcaseGridHeight = {
	attach: function (context, settings) {
		$('body', context).once('suitcaseGridHeight', function () {
			$(window).load(function () {
				if (window.matchMedia('(min-width: 739px)').matches) {
				var maxHeight = 0;
				$('.luggage-grid,.views-row').each(function () {
					if ($(this).height() > maxHeight) {
						maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();									
					}
					});
				$('.luggage-grid,.views-row').height(maxHeight);
				}
			});
		});		  
	}
};
})(jQuery);

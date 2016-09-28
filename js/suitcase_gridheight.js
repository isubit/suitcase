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
					$('.luggage-gridrow,.views-row').each(function () {
						maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();									
						$(this).height(maxHeight);
					});
				}
			});
		});		  
	}
};
})(jQuery);

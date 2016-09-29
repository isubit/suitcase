/**
 * Function for resizing view rows injected with luggage-grid class
 */

(function($) {
Drupal.behaviors.suitcaseGridHeight = {
	attach: function (context, settings) {
		$('body', context).once('suitcaseGridHeight', function () {
			$(window).bind('load resize', function () {
				if (window.matchMedia('(min-width: 739px)').matches) {
					var maxHeight = 0;
					for (var i = 1; i < $('.luggage-gridrow').length; i += 2) {
						var even = i + 1;
						$('.views-row-' + i + ', .views-row-' + even).height('auto');
						maxHeight = $('.views-row-' + i).outerHeight() > $('.views-row-' + even).outerHeight() ? $('.views-row-' + i).outerHeight() : $('.views-row-' + even).outerHeight();									
						$('.views-row-' + i + ', .views-row-' + even).height(maxHeight);
					};
				}
			});
		});		  
	}
};
})(jQuery);

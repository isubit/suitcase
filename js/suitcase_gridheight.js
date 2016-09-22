/**
 * Function for resizing view rows injected with luggage-grid class
 */

(function($) {
   Drupal.behaviors.suitcaseGridHeight = {
	   attach: function (context, settings) {
       $('body', context).once('suitcaseGridHeight', function () {
				 $(window).load('resize.suitcaseGridHeight', function () {					 				   
						$($('.views-row.luggage-grid').get()).each(function () {
                 var tallest = 0;
								 $('.views-row.luggage-grid').each(function () {
									 if ($(this).outerHeight() > tallest) {
									   tallest = $(this).outerHeight();									
									 }
								 }).each(function () { 
									 if ($(this).height() < tallest) {
									   $(this).css('height', tallest);
										 }
									 });
								// }
				      }).load(function () {
					    $(this).trigger('resize.suitcaseGridHeight');
            });
					});
        });		  
		 }
  };
})(jQuery);

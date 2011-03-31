$(window).keydown(function(e){
	// Loop though all elements with the class 'activity' until we find the one the clinet is 'looking' at
	$('.activity').each(function(index, act) {
		// Caching and readability
		var scrollTop = $(window).scrollTop(),
		    actTop = $(act).offset().top,
		    actMarginBottom = parseInt($(act).css('margin-bottom'));
		
		// Check if we're looking at the current activity
		if (scrollTop > actTop - actMarginBottom && scrollTop < actTop + $(act).height()) {
			if (e.keyCode == 38 || e.keyCode == 40) {
				if (e.keyCode == 38) { // Up
					// Get the top y coordinate of the previous element
					var top = (index == 0) ? 0 : $($('.activity')[index-1]).offset().top;
				}
				else {
					// Get the top y coordinate of the next element
					var top = $($('.activity')[index+1]).offset().top;
				}
				
				e.preventDefault();
				$.scrollTo(top, 100);
			}
			
			// break out of loop
			return false;
		}
	});
});
$(document).ready(function() {

	// how far the navigation is from the top of the page
	var stickyNavTop = $("#nav").offset().top;
	
	// function to create a sticky navigation
	function stickyNav() {
		// how much the user has scrolled
		var scrollTop = $(window).scrollTop();		     

		// compare the navigation distance vs scrolled distance; if scrolled distance is greater, make the nav "sticky"
		if (scrollTop > stickyNavTop) { 
		    $("#nav").addClass("sticky");
		} else {
		    $("#nav").removeClass("sticky"); 
		}
	};

	// call the function 
	stickyNav();
	
	// and call it again when the user scrolls
	$(window).scroll(function() {
	    stickyNav();
	});

});

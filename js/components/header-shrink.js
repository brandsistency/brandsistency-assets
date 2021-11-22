
//----------------------------------------------------------------------------------------------------
// BEHAVIOUR OF HEADER--SHRINK WHEN PAGE SCROLLED
//----------------------------------------------------------------------------------------------------

var navbarHeight = $('.header').outerHeight();

$(document).on("scroll", function(){
    
    // If the user scolls past the header height, add header--shrink class
	if ($(document).scrollTop() > navbarHeight) {
	  $("header").addClass("header--shrink");
	}

    // If they scroll back up to less than the header height, remove header--shrink class
	else {
    	$("header").removeClass("header--shrink");
	}
});

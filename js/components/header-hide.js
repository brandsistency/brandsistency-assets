
//----------------------------------------------------------------------------------------------------
// BEHAVIOUR OF HEADER--HIDE WHEN PAGE SCROLLED
//----------------------------------------------------------------------------------------------------

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.header').outerHeight();

$(window).scroll(function(event) {
    didScroll = true;
});

setInterval(function() {
	if (didScroll) {
		hasScrolled();
		didScroll = false;
	}
}, 250);

// If the user scrolls...
function hasScrolled() {
	var st = $(this).scrollTop();
	
	// ...more than delta
	if(Math.abs(lastScrollTop - st) <= delta)
		return;
	
	// ...and past the header, add header--hide class - this is necessary so you never see what is 'behind' the header
	if (st > lastScrollTop && st > navbarHeight){
		$('header').addClass('header--hide');
	}
	
	// If they scroll up, anywhere on the page, remove header--hide class to bring header back into view
	else {
		if(st + $(window).height() < $(document).height()) {
			$('header').removeClass('header--hide');
		}
	}

	lastScrollTop = st;
}


//----------------------------------------------------------------------------------------------------
// BEHAVIOUR OF BACK-TO-TOP LINK
//----------------------------------------------------------------------------------------------------

// Fade in/out back-to-top link when user has scrolled more than/less than 200px
$(document).ready(function() {
	$(window).scroll(function() {
		$(this).scrollTop() > 500 ? $(".back-to-top").fadeIn(250) : $(".back-to-top").fadeOut(250);
	})
});


//----------------------------------------------------------------------------------------------------
// BEHAVIOUR OF HEADER BOX-SHADOW
//----------------------------------------------------------------------------------------------------

// Add/remove header--scrolled class when user has scrolled more than/less than 10px
$(function(n) {
	function o() {
		var o = n(".header"),
		e = n(window).scrollTop();
		e >= 10 ? o.hasClass("header--scrolled") || o.addClass("header--scrolled") : o.removeClass("header--scrolled")
	}
	o(), n(window).on("scroll resize", o)
});

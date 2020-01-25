// Header box-shadow 'appears' on scroll
jQuery(function(n) {
	function o() {
		var o = n(".header"),
		e = n(window).scrollTop();
		e >= 10 ? o.hasClass("scrolled") || o.addClass("scrolled") : o.removeClass("scrolled")
	}
	o(), n(window).on("scroll resize", o)
});

jQuery(function() {
	jQuery("a[href*=#]:not([href=#])").click(function() {
		if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
			var n = jQuery(this.hash);
			if (n = n.length ? n : jQuery("[name=" + this.hash.slice(1) + "]"), n.length) return jQuery("body,html").animate({
				scrollTop: n.offset().top
			}, 800), !1
		}
	})
});

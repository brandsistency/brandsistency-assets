/*------------------------------------------------------------
	SMOOTH SCROLLING
------------------------------------------------------------*/

jQuery(function() {
	jQuery("a[href*=#]:not([href=#])").click(function() {
		if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
			var n = jQuery(this.hash);
			if (n = n.length ? n : jQuery("[name=" + this.hash.slice(1) + "]"), n.length) return jQuery("body,html").animate({
				scrollTop: n.offset().top
			}, 800), !1
		}
	})
}),



/*------------------------------------------------------------
	FADING BACK-TO-TOP BUTTON
------------------------------------------------------------*/

jQuery(document).ready(function() {
	jQuery(window).scroll(function() {
		jQuery(this).scrollTop() > 200 ? jQuery(".back-to-top").fadeIn() : jQuery(".back-to-top").fadeOut()
	})
}),



/*------------------------------------------------------------
	TBC
------------------------------------------------------------*/

function() {
	var n = {
		clicked: "was clicked!"
	},
	o = {
		container: "header",
		btn: "#btn"
	},
	e = {
		containerHasFocus: "has-focus"
	},
	t = document.querySelector(o.container),
	a = document.querySelector(o.btn);
	document.addEventListener("keyup", function(n) {
		t.contains(n.target) ? t.classList.add(e.containerHasFocus) : t.classList.remove(e.containerHasFocus)
	}), document.addEventListener("mousedown", function(n) {
		t.contains(n.target) && t.classList.remove(e.containerHasFocus)
	}), a.addEventListener("click", function(o) {
		console.log(o.target.id + " " + n.clicked)
	})
}();

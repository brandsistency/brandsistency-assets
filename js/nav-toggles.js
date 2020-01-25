jQuery(function(n) {

	// Header nav dropdowns click-activated on desktop and mobile
	n(function() {
		n("nav ul li > a:not(:only-child)").click(function(o) {
			n(this).toggleClass("open"), n("nav ul li > a:not(:only-child)").not(n(this)).removeClass("open"), n(this).siblings(".nav__submenu").toggle(), n(".nav__submenu").not(n(this).siblings()).hide(), o.stopPropagation()
		}), n("html").click(function() {
			n("nav ul li > a:not(:only-child)").removeClass("open"), n(".nav__submenu").hide()
		})
	}),

	// Toggle mobile header nav with hamburger
	document.querySelector("#nav__toggle").addEventListener("click", function() {
		this.classList.toggle("active")
	}), n("#nav__toggle").click(function() {
		n("nav ul").toggle()
	}),

	// Footer nav dropdowns click-activated on mobile only
	n(function() {
		n(".footer__mobile ul li > a:not(:only-child)").click(function(o) {
			n(this).toggleClass("open"), n(".footer__mobile ul li > a:not(:only-child)").not(n(this)).removeClass("open"), n(this).siblings(".footer__submenu").toggle(), n(".footer__submenu").not(n(this).siblings()).hide(), o.stopPropagation()
		}), n("html").click(function() {
			n(".footer__mobile ul li > a:not(:only-child)").removeClass("open"), n(".footer__submenu").hide()
		})
	})
});

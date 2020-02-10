jQuery(document).ready(function() {
	jQuery(window).scroll(function() {
		jQuery(this).scrollTop() > 200 ? jQuery(".back-to-top").fadeIn() : jQuery(".back-to-top").fadeOut()
	})
});

// Add 'active' class to the current page and its section parent
jQuery(document).ready(function(n) {
	var o = window.location;
	"/" == o ? n().removeClass("active") : (n('nav > ul a[href="' + o + '"]').parent().addClass("active"), n("nav > ul a").filter(function() {
		return this.href == o
	}).parent().addClass("active"), n("nav > ul a").filter(function() {
		return this.href == o
	}).parent().parent().parent().addClass("active"))
}),

// Add 'active' class to the blog nav item when a blog article is the current page
jQuery(document).ready(function(n) {
	window.location.href.indexOf("blog") > -1 && n("nav > ul > li:nth-child(2)").addClass("active")
});

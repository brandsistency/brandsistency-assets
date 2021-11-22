
//----------------------------------------------------------------------------------------------------
// BEHAVIOUR OF ACTIVE/SELECTED NAV MENU ITEMS
//----------------------------------------------------------------------------------------------------

// Add 'active' class to current page and its section parent in the header
$(document).ready(function(n) {
	var o = window.location;
	"/" == o ? n().removeClass("active") : (n('nav > ul a[href="' + o + '"]').parent().addClass("active"), n("nav > ul a").filter(function() {
		return this.href == o
	}).parent().addClass("active"), n("nav > ul a").filter(function() {
		return this.href == o
	}).parent().parent().parent().addClass("active"))
}); // Change semicolon to comma if not last item

/* Add 'active' class to current page and its section parent in the footer
$(document).ready(function(n) {
	var o = window.location;
	"/" == o ? n().removeClass("active") : (n('footer ul a[href="' + o + '"]').parent().addClass("active"), n("footer ul a").filter(function() {
		return this.href == o
	}).parent().addClass("active"), n("footer ul a").filter(function() {
		return this.href == o
	}).parent().parent().parent().addClass("active"))
}),*/

/* Add 'active' class to the blog nav item when a blog article is the current page
$(document).ready(function(n) {
	window.location.href.indexOf("blog") > -1 && n("nav > ul > li:nth-child(2)").addClass("active")
});*/

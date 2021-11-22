
//----------------------------------------------------------------------------------------------------
// BEHAVIOUR OF MOBILE NAV AND OTHER ELEMENTS WHEN MOBILE NAV IS OPEN
//----------------------------------------------------------------------------------------------------

// When user clicks nav__toggle...
$(".nav__toggle").click(function () {

    // ...toggle 'nav--open' class on key elements
	$(this).toggleClass('nav--open');
    $("body, header, .nav").toggleClass("nav--open");

    // If body has 'nav--open' class, set position and top inline styles
    if ($("body").hasClass("nav--open")) {
        const body = document.body;
        const scrollY = document.documentElement.style.getPropertyValue("--scroll-y");
        body.style.position = "fixed";
        body.style.top = `-${scrollY}`;
    }

    // If body does not have 'nav--open' class, remove inline stlyes and apply scrolled distance to window (html) element - preserves scrolled position
    else {
				const html = document.documentElement;
				const body = document.body;
        const scrollY = body.style.top;
        body.style.position = "";
        body.style.top = "";
				html.style.scrollBehavior = "auto"; // Temporarily disable smooth scroll-behavior...
        window.scrollTo(0, parseInt(scrollY || "0") * -1); // ...so background scrollTo is a jump and then...
				html.style.scrollBehavior = ""; // ...re-enable smooth scroll-behavior
    }

    return false;
});

// Apply scrolled distance to window (html) element
window.addEventListener("scroll", () => {
    document.documentElement.style.setProperty("--scroll-y", `${window.scrollY}px`);
});

;(function (window, document, undefined) {
	'use strict';
	if (!('localStorage' in window)) return;
	var nightMode = localStorage.getItem('gmtNightMode');
	if (nightMode) {
		document.documentElement.className += ' night-mode';
	}
})(window, document);

;(function (window, document, undefined) {
	'use strict';

	// Feature test
	if (!('localStorage' in window)) return;

	// Get the navigation menu
	var nav = document.querySelector('#night-icon');
	if (!nav) return;

	// Insert the night mode toggle
	nav.innerHTML += '<div id="night-mode"><a role="button" href="#" title="Dark mode"><svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><path d="M15.496 10.043a.889.889 0 00-.747-.003 6.583 6.583 0 01-4.997-.017A6.506 6.506 0 016.31 1.247.87.87 0 005.89.084a.886.886 0 00-.712-.018A8.256 8.256 0 00.649 4.532a8.158 8.158 0 00-.019 6.333 8.254 8.254 0 004.502 4.491A8.389 8.389 0 008.348 16a8.392 8.392 0 003.17-.625 8.29 8.29 0 004.399-4.172.871.871 0 00-.42-1.16zm-9.9-8.978l-.003.001h.002zm5.508 13.31c-3.7 1.507-7.945-.252-9.465-3.921-1.452-3.505.102-7.505 3.472-9.17a7.585 7.585 0 004.223 9.739 7.67 7.67 0 005.354.192 7.21 7.21 0 01-3.584 3.16z" fill="#222" fill-rule="nonzero"/></svg></a></div>';

	// Get our newly insert toggle
	var nightMode = document.querySelector('#night-mode');
	if (!nightMode) return;

	// When clicked, toggle night mode on or off
	nightMode.addEventListener('click', function (event) {
		event.preventDefault();
		document.documentElement.classList.toggle('night-mode');
		if ( document.documentElement.classList.contains('night-mode') ) {
			localStorage.setItem('gmtNightMode', true);
			return;
		}
		localStorage.removeItem('gmtNightMode');
	}, false);
})(window, document);


//====================================================================================================
// BEHAVIOUR OF HOMEPAGE HERO IMAGE CAROUSEL
//====================================================================================================

$(function() {
	if(document.body.className === "home") { // Allow script to run only on the homepage

		var timeOnSlide = 4,       // USER DEFINED - time in seconds that each image remains static on screen
			timeBetweenSlides = 2, // USER DEFINED - time in seconds to transition between images

			// Test if the browser supports animation, and if it needs a vendor prefix to do so
			animationstring = 'animation',
			animation = false,
			keyframeprefix = '',
			domPrefixes = 'Webkit Moz O Khtml'.split(' '), // Array of possible vendor prefixes
			pfx  = '',
			slidy = document.getElementById("hero__carousel");

		// Browser supports keyframe animation w/o prefixes
		if (slidy.style.animationName !== undefined) {
			animation = true;
		} 

		if (animation === false) {
			for( var i = 0; i < domPrefixes.length; i++ ) {
				if( slidy.style[ domPrefixes[i] + 'AnimationName' ] !== undefined ) {
					pfx = domPrefixes[ i ];
					animationstring = pfx + 'Animation';
					keyframeprefix = '-' + pfx.toLowerCase() + '-';
					animation = true;
					break;
				}
			}
		}

		if (animation === false) {
			// Animate in JavaScript fallback
		}

		else {
			var images = slidy.getElementsByTagName("img"),
				firstImg = images[0], // Get the first image inside the 'slidy' element
				imgWrap = firstImg.cloneNode(false);  // Copy it

			slidy.appendChild(imgWrap); // Add the clone to the end of the images

			var imgCount = images.length, // Count the number of images in the slide, including the new cloned element
				totalTime = (timeOnSlide + timeBetweenSlides) * (imgCount - 1), // Calculate the total length of the animation by multiplying the number of 'actual' images by the amount of time for both static display of each image and motion between them
				slideRatio = (timeOnSlide / totalTime)*100, // Determine the percentage of time an induvidual image is held static during the animation
				moveRatio = (timeBetweenSlides / totalTime)*100, // Determine the percentage of time for an individual movement
				basePercentage = 100/imgCount, // Work out how wide each image should be in the slidy, as a percentage.
				position = 0, // Set the initial position of the slidy element
				css = document.createElement("style"); // Start marking a new style sheet

			css.type = "text/css";
			css.innerHTML += "#hero__carousel { font-size: 0; margin: 0; position: relative; text-align: left; width: " + (imgCount * 100) + "%;  }\n"; // Set the width for the carousel container
			css.innerHTML += "#hero__carousel img { float: left; width: " + basePercentage + "%; }\n";
			css.innerHTML += "@"+keyframeprefix+"keyframes slidy {\n"; 

			for (i=0;i<(imgCount-1); i++) {
				position+= slideRatio; // Make the keyframe the position of the image
				css.innerHTML += position+"% { left: -"+(i * 100)+"%; }\n";
				position += moveRatio; // Make the postion for the 'next' slide
				css.innerHTML += position+"% { left: -"+((i+1) * 100)+"%; }\n";
			}

			css.innerHTML += "}\n";
			css.innerHTML += "#hero__carousel { left: 0%; "+keyframeprefix+"transform: translate3d(0,0,0); "+keyframeprefix+"animation: "+totalTime+"s slidy infinite; }\n"; // Call on the completed keyframe animation
			document.body.appendChild(css); // Add the new stylesheet to the end of the document
		}

	}
});

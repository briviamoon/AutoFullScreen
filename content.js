// Function to enter fullscreen mode
function enterFullscreen(element) {
	if (element.requestFullscreen) {
		element.requestFullscreen();
	} else if (element.mozRequestFullScreen) { /* Firefox */
		element.mozRequestFullScreen();
	} else if (element.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
		element.webkitRequestFullscreen();
	} else if (element.msRequestFullscreen) { /* IE/Edge */
		element.msRequestFullscreen();
	}
}

// Function to check if an element is a video
function isVideo(element) {
	return element.tagName.toLowerCase() === 'video';
}

// Function to handle video play event
function handleVideoPlay(event) {
	chrome.storage.sync.get('autoFullscreenEnabled', function (data) {
		if (data.autoFullscreenEnabled) {
			const video = event.target;
			enterFullscreen(video);
		}
	});
}

// Add event listeners for video play events
document.addEventListener('play', function (event) {
	if (isVideo(event.target)) {
		handleVideoPlay(event);
	}
}, true);

// Add event listener for page change events (e.g., AJAX navigation)
document.addEventListener('DOMContentLoaded', function () {
	// Check for video elements on page load
	const videos = document.querySelectorAll('video');
	videos.forEach(video => {
		video.addEventListener('play', handleVideoPlay);
	});
});

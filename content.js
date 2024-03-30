// Function to enter fullscreen mode for a video element
function enterFullscreen(video) {
	if (video.requestFullscreen) {
		video.requestFullscreen();
	} else if (video.mozRequestFullScreen) { /* Firefox */
		video.mozRequestFullScreen();
	} else if (video.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
		video.webkitRequestFullscreen();
	} else if (video.msRequestFullscreen) { /* IE/Edge */
		video.msRequestFullscreen();
	}
}

// Function to check if an element is a video
function isVideo(element) {
	return element.tagName.toLowerCase() === 'video';
}

// Function to handle video play event
function handleVideoPlay(event) {
	const video = event.target;
	if (isVideo(video) && !document.fullscreenElement) {
		enterFullscreen(video);
	}
}

// Add event listener for page change events (e.g., AJAX navigation)
document.addEventListener('DOMContentLoaded', function () {
	// Check for video elements on page load
	const videos = document.querySelectorAll('video');
	videos.forEach(video => {
		video.addEventListener('play', handleVideoPlay);
	});
});

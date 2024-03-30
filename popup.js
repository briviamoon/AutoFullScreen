document.addEventListener('DOMContentLoaded', function () {
	const toggleFullscreen = document.getElementById('toggleFullscreen');

	chrome.storage.sync.get('autoFullscreenEnabled', function (data) {
		toggleFullscreen.checked = data.autoFullscreenEnabled || false;
	});

	toggleFullscreen.addEventListener('change', function () {
		chrome.storage.sync.set({ autoFullscreenEnabled: toggleFullscreen.checked });
	});
});

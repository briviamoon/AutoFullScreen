document.addEventListener('DOMContentLoaded', function () {
	const toggleAutoFullscreen = document.getElementById('toggleAutoFullscreen');

	chrome.storage.sync.get('autoFullscreenEnabled', function (data) {
		toggleAutoFullscreen.checked = data.autoFullscreenEnabled;
	});

	toggleAutoFullscreen.addEventListener('change', function () {
		chrome.storage.sync.set({ autoFullscreenEnabled: toggleAutoFullscreen.checked });
	});
});

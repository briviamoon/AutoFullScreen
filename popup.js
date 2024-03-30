document.addEventListener('DOMContentLoaded', function () {
	const autoFullscreenOn = document.getElementById('autoFullscreenOn');
	const autoFullscreenOff = document.getElementById('autoFullscreenOff');

	// Function to update the UI based on stored value
	function updateUI(value) {
		if (value === 'on') {
			autoFullscreenOn.checked = true;
		} else {
			autoFullscreenOff.checked = true;
		}
	}

	// Retrieve stored value and update UI
	chrome.storage.sync.get('autoFullscreen', function (data) {
		const value = data.autoFullscreen || 'on'; // Default to 'on'
		updateUI(value);
	});

	// Event listener for radio button changes
	autoFullscreenOn.addEventListener('change', function () {
		if (autoFullscreenOn.checked) {
			chrome.storage.sync.set({ autoFullscreen: 'on' });
		}
	});

	autoFullscreenOff.addEventListener('change', function () {
		if (autoFullscreenOff.checked) {
			chrome.storage.sync.set({ autoFullscreen: 'off' });
		}
	});
});

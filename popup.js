// popup.js
document.addEventListener('DOMContentLoaded', function () {
    const colorSchemeSelect = document.getElementById('colorScheme');
    const savePreferencesButton = document.getElementById('savePreferences');

    // Load the user's color scheme preference from storage
    chrome.storage.sync.get(['colorScheme'], function (result) {
        const savedColorScheme = result.colorScheme;
        if (savedColorScheme) {
            colorSchemeSelect.value = savedColorScheme;
        }
    });

    // Save the selected color scheme to storage when the button is clicked
    savePreferencesButton.addEventListener('click', function () {
        const selectedColorScheme = colorSchemeSelect.value;

        // Save the color scheme preference to storage
        chrome.storage.sync.set({ colorScheme: selectedColorScheme }, function () {
            console.log('Color scheme preference saved:', selectedColorScheme);
        });
        location.reload();
    });
});

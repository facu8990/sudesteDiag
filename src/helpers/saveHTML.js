const fs = require('fs');
const { dialog } = require('electron');

const saveHTML = (html) => {
	// Show a save dialog
	dialog.showSaveDialog({
		filters: [{ name: 'HTML', extensions: ['html'] }]
	}).then(result => {
	// If the user clicked the "Save" button
		if (!result.canceled) {
		// Write the HTML to the selected file
			fs.writeFile(result.filePath, html, err => {
				if (err) {
					// If an error occurred, show an error dialog
					dialog.showErrorBox('Error', 'Failed to save file: ' + err.message);
				} else {
					// If the file was saved successfully, show a success dialog
					dialog.showMessageBox({
						type: 'info',
						message: 'File saved',
						detail: 'The HTML was saved successfully.',
						buttons: ['OK']
					});
				}});
		}});
};

module.exports.saveHTML = saveHTML;
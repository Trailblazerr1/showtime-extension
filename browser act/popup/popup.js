(function () {
	'use strict';

//call backgrund.js
	var backgroundpage = chrome.extension.getBackgroundPage();
	document.querySelector('button').addEventListener('click', function() {
		backgroundpage.handleButtonClick();
	});
}());
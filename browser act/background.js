function handleButtonClick() {
	chrome.tabs.create({

		url: 'http://google.co.in'
	},function (tab) {
		console.log(tab);
	});
}
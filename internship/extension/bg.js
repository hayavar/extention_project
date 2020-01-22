chrome.runtime.onInstalled.addListener(function(tab) {
	chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
		chrome.tabs.executeScript(tab.id,{"file":"content.js"});
    //code in here will run every time a user goes onto a new tab, so you can insert your scripts into every new tab
});
	


});
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.sendMessage(tab.id, { toggleCss: true });
});

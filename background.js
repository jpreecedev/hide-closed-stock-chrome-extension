chrome.tabs.onUpdated.addListener(function (tab) {
    chrome.tabs.sendMessage(tab, {
        text: 'load'
    });
});
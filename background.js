var urlRegex = /^https?:\/\/(?:[^\.]+\.)?ycombinator\.com/;

chrome.browserAction.onClicked.addListener(function(tab) {
    if (urlRegex.test(tab.url)) {
        chrome.tabs.sendMessage(tab.id, { text: "report_back" }, null);
    }
});
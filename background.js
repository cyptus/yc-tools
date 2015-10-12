var urlRegex = /^https?:\/\/(?:[^\.]+\.)?ycombinator\.com/;

function printApplyInfo(domContent) {
    console.log("info" + domContent);
}

chrome.browserAction.onClicked.addListener(function(tab) {
    if (urlRegex.test(tab.url)) {
        chrome.tabs.sendMessage(tab.id, { text: "report_back" }, printApplyInfo);
    }
});
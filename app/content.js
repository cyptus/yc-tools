chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    if (msg.text && (msg.text == "report_back")) {
        var result = "<style>font-family: Verdana</style>";
        var questions = document.querySelectorAll(".q");
		
        [].forEach.call(questions, function(q) {
          var qLabel = q.querySelector("label");
          var qVal = document.getElementById(qLabel.htmlFor);
          if(qVal && qVal.value) {
            result += "<strong># " + qLabel.innerText + "</strong>" + "<br/>" + qVal.value + "<br /><br />";
          }
        });
		
        result += "<script>window.print();</script>";
		
        var tab = window.open();
        tab.document.write(result);
    }
});
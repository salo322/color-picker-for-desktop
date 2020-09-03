chrome.browserAction.onClicked.addListener((tab)=> {
  chrome.tabs.captureVisibleTab(null, null, function(dataUrl) {  
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {icon: "clicked", screenshotUrl: dataUrl});
      console.log(dataUrl)
    });
  });
  });  



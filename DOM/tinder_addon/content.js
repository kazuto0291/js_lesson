chrome.runtime.onMessage.addListener(function(message, sender, sendRespose) {
  if (message.type === 'like') {
    document.getElementsByClassName('button focus-button-style')[3].click()
  }
 })
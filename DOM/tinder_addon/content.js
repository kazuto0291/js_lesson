chrome.runtime.onMessage.addListener(function(message, sender, sendRespose) {
  if (message.type === 'like') {
    let count = 0
    const id = setInterval(function() {
      document.getElementsByClassName('button focus-button-style')[3].click()
      count++
      if(count >= message.count) {
        window.alert('終わったよ!')
        clearInterval(id)
      }
    }, 3000)
  }
 })
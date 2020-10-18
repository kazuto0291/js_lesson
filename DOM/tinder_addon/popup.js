const pushMessageToContent = function (message) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    const tab = tabs[0]
    chrome.tabs.sendMessage(tab.id, message)
  })
 }
 
 document.getElementById('button').addEventListener('click', function() {
   const count = getCount()
  pushMessageToContent({type:'like', count:count}) // like というメッセージを送る
 })

const getCount = function () {
  const input = document.getElementById('count')
  return parseInt(input.value)//文字列を数字にする parseInt
}
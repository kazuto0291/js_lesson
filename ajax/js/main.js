const ajax = new XMLHttpRequest();
ajax.open('GET', 'http://127.0.0.1:5501/ajax/js/feed.json', true);
ajax.onload = function(e) {
  if (ajax.readyState === 4) {
    if(ajax.status === 200) {
      const json = JSON.parse(ajax.responseText);
      let html = '<ul>';
      for (let i = 0; i < json.items.length; i++) {
        html += '<li>' + json.items[i].title + '</li>'
      }
      html += '</ul>';
      document.getElementById('news').innerHTML = html
      console.log(json);
    }
  }
}
ajax.send(null);
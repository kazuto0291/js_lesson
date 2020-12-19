//ajaxとは
$(function() {
  $.ajax({
    type: "get",　//post, delete, put
    url: 'http://localhost:5501/ajax/jquery/hoge',
    dataType:'json'
  })
  // 通信が成功した時
  .done((res) => {
    document.write(res.message)
  })
  // 通信が失敗した時
  .fail((error) => {
    document.write(error.statusText)
  })
});
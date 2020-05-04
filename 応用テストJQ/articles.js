$(function(){

  //①マウスオーバー、マウスアウト
  $(".contents").on("mouseover", ".article", function(){
    $(this).css({"background-color": "#F1940B", "font-weight": "bold"});
  }).on("mouseout", ".article", function(){
    $(this).css({"background-color": "#FFFFFF", "font-weight": "normal"});
  })

  //②文字カウント
  $(".article_form").on('keyup', function(){
    $(".char_num").text($(this).val().length + '文字');
  });

  //③Ajax
  $("#new_article").on("submit", function(e){
    e.preventDefault();

    var text = $(".article_form").val();
    $.ajax({
      url: "/articles",
      type: "POST",
      data: { text: text },
      dataType: 'json',
    }).done(function(data){
      var html = buildHTML(data.text);
      $(".contents").prepend(html);
      $(".article_form").val("");
    }).fail(function(jqXHR, textStatus, errorThrown){
      // ④エラーメッセージ
      alert("error : " + errorThrown)
    })
  })

  function buildHTML(data){
    var html =
    `<div class="article"> ${data} </div>`
    return html;
  }

  //⑤スクロール
  $(".scroll_arrow").on("click", function(){
     $(".contents").animate({scrollTop: $(".contents")[0].scrollHeight}, 500, "swing");
  })

})
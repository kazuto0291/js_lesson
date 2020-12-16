
new Vue({
  el:'#app',
  data: {
    message: "HElloWorld",
    number: 3,
    ok: false,
    html: '<h1>h1です</h1>',
    url: 'https://google.com',
    urlTwitter: 'https://twitter.com',
    attribute: 'href',
    twitterObject: {
      href: 'https://twitter.com',
      id:31
    },
    number2: 0,
    x: 0,
    y: 0
  },
  methods: {
    reverseMessage: function() {
      this.message =this.message.split('').reverse().join('')
    },
    sayhi: function(){
      this.message = " Hello Vuejs"
      return this.message;
    },
    countUp: function() {
      this.number2 += 2
    },
    // メソッドの引数にeventとすることでイベントオブジェクトが取得できる
    changeMousePosition: function(event) {
      console.log(event)
      this.x= event.clientX
      this.y= event.clientY
    }
  }
})


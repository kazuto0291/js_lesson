
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
      console.log(message)
      this.message =this.message.split('').reverse().join('')
    },
    sayhi: function(){
      this.message = " Hello Vuejs"
      return this.message;
    },
    countUp: function(time) {
      this.number2 += 2 *time
    },
    // メソッドの引数にeventとすることでイベントオブジェクトが取得できる
    changeMousePosition: function(divideNumber,event) {
      console.log(event)
      this.x= event.clientX / divideNumber
      this.y= event.clientY /divideNumber
    },
    noEvent: function(event) {
      event.stopPropagation()
    }
  }
})


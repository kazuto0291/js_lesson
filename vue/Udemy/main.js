new Vue({
  el:'#app',
  data: {
    message: "HElloWorld",
    number: 3,
    ok: false,
    html: '<h1>h1です</h1>'
  },
  methods: {
    reverseMessage: function() {
      this.message =this.message.split('').reverse().join('')
    },
    sayhi: function(){
      this.message = " Hello Vuejs"
      return this.message;
    }
  }
})


new Vue({
  el:'#app',
  data: {
    message: "HElloWorld"
  },
  methods: {
    reverseMessage: function() {
      this.message =this.message.split('').reverse().join('')
    }
  }
})
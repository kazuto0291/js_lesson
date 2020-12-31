new Vue({
  el: '#app',
  data: {
    message:'こんにちは',
    counter: 0,
    otherCounter: 0
  },
  computed: {
    lessThanThreeComputed: function() {
      console.log("Computed")
      return this.counter > 3 ? '3より上' : '3以下'
    }
  },
  //watchでは 非同期の処理をよくする,非同期だとreturnが使えない,returnは同期処理
  watch: {
    counter: function() {
      const vm = this;
      setTimeout(function() {vm.counter = 0}, 3000)
    }
  },
  methods: {
    lessThanThreeMethod: function() {
      console.log('Method')
      return this.counter > 3 ? '3より上' : '3以下'
    }
  },
})
new Vue({
  el: '#app',
  data() {
    return {
      url: 'https://google.com'
    }
  },
  methods: {
    showDate() {
      return new Date().toISOString()
    },
    clickButton() {
      alert('クリック!⚠');
    }
  }
})
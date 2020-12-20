new Vue({
  el: '#app',
  data: {
    isActive: true
  },
  computed: {
    classObject: function() {
      return {yellow: this.isActive, 'bg-orenge': !this.isActive}
    }
  }
})
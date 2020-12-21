new Vue({
  el: '#app',
  data: {
    isActive: true,
    color: 'green',
    bg: 'bg-tomato'
  },
  computed: {
    classObject: function() {
      return {yellow: this.isActive, 'bg-orenge': !this.isActive}
    }
  }
})
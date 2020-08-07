new Vue({
  el: '#app',
  data() {
    return {
      text1: '',
      text2: '',
      text3: '',
      count: 1,
    }
  },
  computed: {
    capitalizedText1() {
      console.log('computed.');
      if (!this.text1) {
        return '';
      }

      return this.text1.charAt(0).toUpperCase() + this.text1.slice(1);
    }
  },
  watch: {
    text3(newValue, oldValue) {
      console.log('newValue : ', newValue);
      console.log('oldValue : ', oldValue);
    }
  },
  methods: {
    capitalizeText2() {
      console.log('methods.');
      if (!this.text2) {
        return '';
      }

      return this.text2.charAt(0).toUpperCase() + this.text2.slice(1);
    },
    increment() {
      this.count++;
    }
  }
})


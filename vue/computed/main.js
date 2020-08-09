Vue.component('button-counter', {
  data() {
    return {
      count: 0
    };
  },
  template:`
  <div>
    <p>カウント；{{ count }} </p>
    <button @click="count++">インクリメント</button>
  </div>
  `
});


new Vue({
  el: '#app',
  data() {
    return {
      text1: '',
      text2: '',
      text3: '',
      count: 1,
      tweets: [
        {
          user: 'スズキ',
          text: 'おはよう'
        },
        {
          user: 'タカハシ',
          text: 'こんにちは'
        },
        {
          user: 'コイズミ',
          text: 'こんばんは'
        },
        {
          user: 'マルコス・アロンソ',
          text: 'おはよう御座います'
        },
      ],
      article: {
        user: 'ボブ',
        text: 'Hello World',
        date: new Date().toDateString()
      }
    }
  },
  created() {
    console.log('created!');
  },
  mounted() {
    console.log('mounted!!');
  },
  updated() {
    console.log('updated!!');
  },
  destroyed() {
    console.log('destroyed!!');
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
    },
    destroy() {
      this.$destroy();
    }
  }
})


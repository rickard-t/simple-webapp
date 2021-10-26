var app = new Vue({
  el: '#quote',
  data: {
    message: '---'
  },
  methods: {
    newQuote: function() {
      this.message = 'Test'
    }
  }
})

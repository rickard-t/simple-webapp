var app = new Vue({
  el: '#quote',
  data: {
    api_url: '/quote',
    response: '---',
    error: false,
    loading: false
  },
  methods: {
    newQuote: function() {
      this.error = false
      this.loading = true
      axios.get(this.api_url)
        .then(response => (this.response = response))
        .catch(error => {
          console.log(error)
          this.response = error
          this.error = true
        })
        .finally(() => (this.loading = false))
    }
  }
})

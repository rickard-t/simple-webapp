var QUOTE_URL = '/quote'

// Vue app for storing a quote and loading new quotes.
var quote_app = new Vue({
  el: '#quote',
  data: {
    quote: 'Press the button to show a new quote.',
    author: 'Rickard Torén',
    error_msg: '',
    error: false,
    loading: false
  },
  methods: {
    // Loads a new quote from the local server and updates the webpage
    newQuote: function() {
      this.error = false
      this.loading = true
      axios.get(QUOTE_URL)
        .then(response => {
          // If the response does not contain the fields extracted,
          // any error will be handled in the catch statement below.
          data = response.data[0]
          this.quote = data.q
          this.author = data.a
          if (this.quote == undefined || this.author == undefined) {
            throw 'Error. Response is missing fields.'
          }
        })
        // Catches both client and server errors
        .catch(error => {
          console.log(error)
          this.error_msg = error
          this.error = true
        })
        .finally(() => (this.loading = false))
    }
  }
})

from flask import Flask, send_from_directory
import requests

QUOTE_URL = 'https://zenquotes.io/api/random'
CLIENT_FOLDER = '../client'

# Create the server and serve static files without adding extra folders in URL
app = Flask(__name__, static_url_path='', static_folder=CLIENT_FOLDER)

@app.route("/")
def root():
    """ Displays the home page under root URL. """
    return send_from_directory(CLIENT_FOLDER, 'index.html')

@app.route("/quote")
def quote():
    """ Fetches a quote from the remote server and returns it. """
    content = ''
    status_code = 200
    try:
        response = requests.get(QUOTE_URL)
        response.raise_for_status()
        content = response.text
    except requests.exceptions.RequestException as error:
        print(error)
        content = str(error)
        status_code = 500
    return content, status_code

if __name__ == '__main__':
    app.run()

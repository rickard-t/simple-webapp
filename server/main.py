from flask import Flask, send_from_directory

CLIENT_FOLDER = '../client'

app = Flask(__name__, static_url_path='', static_folder=CLIENT_FOLDER)

@app.route("/")
def root():
    return send_from_directory(CLIENT_FOLDER, 'index.html')

@app.route("/quote")
def quote():
    return 'Server quote!'

if __name__ == '__main__':
    app.run()

from flask import Flask, send_from_directory
import webbrowser
import threading

app = Flask(__name__, static_folder='')

@app.route('/')
def serve_index():
    return send_from_directory('', 'index.html')

def open_browser():
    webbrowser.open_new('http://localhost:5000')

if __name__ == '__main__':
    threading.Timer(1, open_browser).start()
    app.run(port=5000)
from flask import Flask, render_template, request
from flask_socketio import SocketIO, send, emit

# Initial key for encrypting messages
keyFromClient = "gators"

app = Flask(__name__)
socketio = SocketIO(app,  cors_allowed_origins='*')

# Flask application route for localhost:5000/
@app.route("/")
def index():
    return render_template("index.html")

# SocketIO event handler to handle user connects/disconnects
@socketio.on('users', "/msg")
def handleUserConnection(msg):
    print("Users Route:  " + msg)
    emit('users', msg, broadcast=True)

# SocketIO event handler to handle usernames in chat messages
@socketio.on('userNames', "/msg")
def handleUserNames(msg):
    print("Username:  " + msg)
    emit('userNames', msg, broadcast=True)

# SocketIO event handler to handle the bulk of the main message
@socketio.on('message', "/msg")
def handleMessageOutput(msg):
    print('Message from Client: ' + msg)
    send(msg, broadcast=True)

# SocketIO event handler to handle the key sent from client
@socketio.on('newOptions', namespace="/msg")
def handleOptions(key):
    print('Server Reading Key: ' + key)
    global keyFromClient
    keyFromClient = key
    emit('newOptions', key, broadcast=True)

if __name__ == '__main__':
	socketio.run(app)
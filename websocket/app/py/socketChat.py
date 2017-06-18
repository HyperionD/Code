from flask import Flask
from flask_socketio import SocketIO, emit, join_room, leave_room

app = Flask(__name__, template_folder='../')
socketio = SocketIO(app)

users = ["test"]

@app.route("/")
def hello():
    return "hello"


@socketio.on("connect")
def handle_connect():
    emit("send_user_list", users)


@socketio.on("add_user")
def add_user(user):
    if user not in users and user != "":
        users.append(user)
        emit("send_user_list", users, broadcast=True)


@socketio.on("send_to_server")
def handle_revice_msg(msg):
    emit("send_to_client", msg, broadcast=True)
    print(msg)


if __name__ == "__main__":
    socketio.run(app, host="0.0.0.0", debug=True)

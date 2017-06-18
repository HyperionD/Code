<template>
    <div class="chatList">
        <div class="chatSession">
            <div v-for="(user, index) in users" v-on:click="chatWith(index)">
                <p>{{ user }}</p>
                <p v-if="session[user] || session[user].getMsg">{{ session[user].msg }}</p>
            </div>
        </div>
        <div class="chatName">
            <input placeholder="输入用户名" ref="user" v-on:keyup.enter="join" />
            <button v-on:click="join">Login</button>
        </div>
    </div>
</template>

<script>
    import bus from "./eventBus";
    export default {
        data: function () {
            return {
                users: [],
                me: "",
                session: {}
            }
        },
        sockets: {
            send_user_list: function (data) {
                this.users = data;
            },
            send_to_client: function (data) {
                const self = this;
                if (data.to === self.me && self.users.indexOf(data.from) !== -1) {
                    data.getMsg = true;
                    self.session[data.from] = data;
                    console.log(self.session[data.from]);
                }
            }
        },
        methods: {
            join: function () {
                const user = this.$refs.user.value;
                this.$socket.emit("add_user", user);
                this.me = user;
                bus.$emit("send_user", user);
            },
            chatWith: function (index) {
                const chat_people = this.users[index];
                bus.$emit("send_chat_people", chat_people);
            }
        }
    }
</script>

<style>
    .chatList {
        display: flex;
        flex-direction: column;
        width: 300px;
        margin: 10px;
    }
    .chatList ul {
        height: 300px;
        border: solid 1px #000000;
    }
    .chatName {
        display: flex;
    }
    .chatName input {
        flex-grow: 1;
    }
</style>
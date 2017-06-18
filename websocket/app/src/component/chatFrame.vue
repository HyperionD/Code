<template>
    <div class="chatFrame">
        <div class="chatTo">
            <p> {{ me }} Chat with {{ chat_to }} </p>
        </div>
        <div class="chatWindow">
            <div v-for="msg in messages"  v-bind:class="msg.role">
                <p class="chatFrom">{{ msg.from }}</p>
                <p class="chatMsg">{{ msg.msg }}</p>
            </div>
        </div>
        <div class="chatInput">
            <input ref="msg" v-on:keyup.enter="send_msg"/>
            <button v-on:click="send_msg">Send</button>
        </div>
    </div>
</template>

<script>
    import bus from "./eventBus";
    export default {
        data: function () {
            return {
                messages: [],
                chat_to: "",
                me: "",
                role: ""
            };
        },
        mounted: function () {
            const self = this;
            bus.$on("send_chat_people", function (people) {
                self.chat_to = people;
            });
            bus.$on("send_user", function (user) {
                self.me = user;
            })
        },
        sockets: {
            send_to_client: function (data) {
                const self = this;
                if (data.to === self.me && data.from === self.chat_to) {
                    data.role = "other";
                    self.messages.push(data);
                } else if (data.from === self.me && data.to === self.chat_to) {
                    data.role = "myself";
                    self.messages.push(data);
                }
            }
        },
        methods: {
            send_msg: function () {
                const self = this;
                const input_msg = this.$refs.msg.value;
                if (input_msg !== "") {
                    const info = {
                        from: self.me,
                        to: self.chat_to,
                        msg: input_msg
                    };
                    this.$socket.emit("send_to_server", info);
                    this.$refs.msg.value = "";
                }
            }
        }
    }
</script>

<style>
    .chatFrame {
        display: flex;
        flex-direction: column;
        width: 300px;
        margin: 10px;
    }
    .chatWindow {
        border: solid 1px #000000;
        height: 300px;
        overflow-y: auto;
    }
    .chatInput {
        margin-top: 10px;
        display: flex;
    }
    .chatInput input {
        flex-grow: 1;
        margin-right: 10px;
    }
    .myself {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
    .other {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .chatFrom {
        margin-bottom: 2px;
        font-size: small;
    }
    .chatMsg {
        width: 150px;
        margin-top: 2px;
        background-color: #dddddd;
        word-wrap: break-word;
    }
    </style>
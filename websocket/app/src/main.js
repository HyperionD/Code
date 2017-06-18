import Vue from "../../node_modules/vue/dist/vue";
import app from "./component/app.vue";
import socketio from "../../node_modules/vue-socket.io/dist/build";
import VueRouter from "../../node_modules/vue-router/dist/vue-router";

Vue.use(socketio,  "http://127.0.0.1:5000");
// Vue.use(socketio,  "http://192.168.1.100:5000");
Vue.use(VueRouter);

new Vue(app);
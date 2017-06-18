import Vue from "../../node_modules/vue/dist/vue";
import app from "./component/app.vue";

const bus = new Vue();
new Vue(app);
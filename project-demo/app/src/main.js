import Vue from "../../node_modules/vue/dist/vue";
import VueRouter from "../../node_modules/vue-router/dist/vue-router";
import index from "./component/index.vue";
import routes from "./route/route";
import store from "./store/store";

Vue.use(VueRouter);
const router = new VueRouter({ routes });

new Vue({
    el: "#app",
    store,
    template: "<index />",
    components: {index},
    router
});

import Vue from "../../node_modules/vue/dist/vue";
import VueRouter from "../../node_modules/vue-router/dist/vue-router.js";
import index from "./component/index.vue";
import routes from "./route/route.js";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: routes
});

new Vue({
    el: "#app",
    template: "<index />",
    components: {index},
    router
});

import Vue from "../node_modules/vue/dist/vue"
import VueRouter from "../node_modules/vue-router/dist/vue-router"
import index from "./views/index.vue"
import routes from "./route/route";

Vue.use(VueRouter);
const router = new VueRouter({
    routes
});

new Vue({
    el: "#backend",
    template: "<index />",
    components: {index},
    router
});
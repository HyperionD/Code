import Vue from "../../node_modules/vue/dist/vue";
import hello from "./component/hello.vue";

new Vue({
    el: "#app",
    template: "<hello />",
    components: {hello},
});

import Vuex from "../../../node_modules/vuex/dist/vuex";
import Vue from "../../../node_modules/vue/dist/vue";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isLogin: false
    },
    mutations: {
        changeLogin: function (state) {
            state.isLogin = !state.isLogin;
        }
    }
});

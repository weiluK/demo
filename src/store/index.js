import Vue from 'vue'
import Vuex from "vuex"
import login  from "./moudels/login"
import home  from "./moudels/home"
Vue.use(Vuex)

const store =new Vuex.Store ({
    state: {
        count: 0
    },
    mutations: {
        updatedcount(state) {
            state.count++
        },
        updatedcount2(state) {
            state.count--
        },

    },
    actions: {
        add(state) {

            setTimeout(() => {
                console.log("触发add", state.state.count);
                state.state.count--

            }, 3000);
        }
    },
    getters: {
        double(state) {
            console.log(state.count);
            return state.count * 2
        }

    },
    modules:{
        login,
        home
    }


})
export default store;
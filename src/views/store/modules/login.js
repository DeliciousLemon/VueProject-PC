import {userLogin} from "@api/login"
export default {
    state: {
        phone: "13700000000",
        password: "111111",
    },
    getters: {},
    actions: {
        login({ state }) {
            userLogin(state.phone, state.password)
        }
    },
    mutations: {}
}
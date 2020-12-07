import { reqRegister } from "@api/register"
export default {
    state: {
    },
    getters: {},
    actions: {
        sendRegister({ commit }, { phone, password, code }) {
            console.log(commit)
            return reqRegister(phone, password, code)
        }
    },
    mutations: {

    }
}
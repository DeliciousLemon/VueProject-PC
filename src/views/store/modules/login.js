import { userLogin } from "@api/login"
export default {
    state: {
        userName: "",
        userNick: "",
        userToken: "",
        isSaveUser: false,
    },
    getters: {},
    actions: {
        async login({ commit }, { userPhone, userPassword }) {
            const loginMessage = await userLogin(userPhone, userPassword)
            const { nickName, name, token } = loginMessage.data
            if (loginMessage.code === 200) {
                commit("LOGIN", { nickName, name, token }
                )
            }
            return loginMessage
        }
    },
    mutations: {
        LOGIN(state, { nickName, name, token }) {
            state.userToken = token
            state.userNick = nickName
            state.userName = name
        },
        OUT_LOGIN(state) {
            state.userToken = ''
            state.userNick = ''
            state.userName = ''
        },
        SET_SAVE_USER(state) {
            state.isSaveUser = !state.isSaveUser
        }
    }
}
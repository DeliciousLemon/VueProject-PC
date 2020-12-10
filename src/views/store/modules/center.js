import { reqCenter } from "@api/center"
export default {
    state: {
        orders: {}
    },
    getters: {
        orders: state => state.orders
    },
    actions: {
        async getCenter({ commit }, { page, limit }) {
            const orders = await reqCenter({page, limit})
            console.log(orders.data.records)
            commit("WRITE_CENTER", orders.data.records)
        }
    },
    mutations: {
        WRITE_CENTER(state, orders) {
            state.orders = orders
        }
    }
}
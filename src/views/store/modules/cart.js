import { reqCartList, reqCartCount, reqDelGoods, reqChecked } from "@api/cart"

export default {
    state: {
        cartList: []
    },
    getters: {},
    actions: {
        //获取购物车所有列表
        async getCartList({ commit }) {
            const cartListValue = await reqCartList()
            commit("WRITE_CART_LIST", cartListValue)
        },
        //更新数据
        async updataCartList({ commit }, { skuID, skuNum }) {
            await reqCartCount(skuID, skuNum)
            commit("UPDATA_CART_LIST", { skuID, skuNum })
        },
        //删除
        delCart({ commit }, id) {
            reqDelGoods(id)
            commit("DEL_GOODS", id)
        },
        //单选
        checked({ commit }, { id, isChecked }) {
            reqChecked(id, isChecked)
            commit("WRITE_IS_CHECKED", { id, isChecked })
        }
    },
    mutations: {
        WRITE_CART_LIST(state, cartListValue) {
            state.cartList = cartListValue
        },
        UPDATA_CART_LIST(state, { skuID, skuNum }) {
            state.cartList.data.map(item => {
                if (item.skuId === skuID) {
                    item.skuNum += Number(skuNum)
                }
                return item
            })
        },
        DEL_GOODS(state, id) {
            state.cartList.data = state.cartList.data.filter(item => item.skuId !== id)
        },
        WRITE_IS_CHECKED(state, { id, isChecked }) {
            state.cartList.data.map(item => {
                item.isChecked = item.skuId === id ? isChecked : item.isChecked
            })
        }
    }
}
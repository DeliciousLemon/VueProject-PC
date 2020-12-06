import { reqCartList, reqCartCount } from "@api/cart"

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
        updataCartList({ commit }, [skuID, skuNum]) {
            reqCartCount(skuID, skuNum)
            commit("UPDATA_CART_LIST", [skuID, skuNum])
        }
    },
    mutations: {
        WRITE_CART_LIST(state, cartListValue) {
            state.cartList = cartListValue
        },
        UPDATA_CART_LIST(state, [skuID, skuNum]) {
            state.cartList.data.map(item => {
                if (item.skuId === skuID) {
                    item.skuNum += Number(skuNum)
                }
            })
        }
    }
}
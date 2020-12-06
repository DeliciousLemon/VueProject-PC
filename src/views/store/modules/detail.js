import { reqDetail, reqAddCart } from "@api/detail"
export default {
    state: {
        detailList: {
            categoryView: {},
            spuSaleAttrList: {},
            skuInfo: {}
        },
        myGoods: {
            attr: {},
        },
    },
    getters: {
        categoryView(state) {
            return state.detailList.categoryView
        },
        spuSaleAttrList(state) {
            return state.detailList.spuSaleAttrList
        },
        skuInfo(state) {
            return state.detailList.skuInfo
        },
    },
    actions: {
        async getDetail({ commit }, detailId) {
            const detailList = await reqDetail(detailId)
            commit("WRITE_DETAILLIST", detailList)
        },
        getAddCart({commit}, { skuID, skuNum }) {
            reqAddCart(skuID, skuNum)
            console.log(commit)
        }
    },
    mutations: {
        WRITE_DETAILLIST(state, detailList) {
            state.detailList = detailList.data
        },
        //保存选择商品数据
        ADD_MY_GOODS(state, attr) {
            state.myGoods.attr = attr
        }
    }
}
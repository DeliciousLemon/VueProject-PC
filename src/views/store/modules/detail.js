import { reqDetail } from "@api/detail"
export default {
    state: {
        detailList: {
            categoryView: {},
            spuSaleAttrList: {},
            skuInfo: {}
        }
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
            const detailList =await reqDetail(detailId)
            commit("WRITE_DETAILLIST", detailList)
        }
    },
    mutations: {
        WRITE_DETAILLIST(state, detailList) {
            state.detailList = detailList.data
            console.log(detailList,11111)
        }
    }
}
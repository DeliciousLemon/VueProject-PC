import { reqDetail, reqAddCart } from "@api/detail"
export default {
    state: {
        detailList: {
            categoryView: {},
            spuSaleAttrList: {},
            skuInfo: {}
        },
        myGoods: {
            name: '',
            attr: {},
            count: "",
            img: ""
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
        name(state){
            return state.myGoods.name
        },
        attr(state){
            return state.myGoods.attr
        },
        count(state){
            return state.myGoods.count
        },
        img(state){
            return state.myGoods.img
        },
    },
    actions: {
        async getDetail({ commit }, detailId) {
            const detailList = await reqDetail(detailId)
            commit("WRITE_DETAILLIST", detailList)
        },
        getAddCart({ commit }, { skuID, skuNum }) {
            reqAddCart(skuID, skuNum)
            console.log(commit)
        }
    },
    mutations: {
        WRITE_DETAILLIST(state, detailList) {
            state.detailList = detailList.data
        },
        //保存选择商品数据
        ADD_MY_GOODS(state, { attr, name, img, count }) {
            state.myGoods.attr = attr
            state.myGoods.name = name
            state.myGoods.img = img
            state.myGoods.count = count
        }
    }
}
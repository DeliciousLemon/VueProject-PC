import {reqSearch} from "@api/search"
export default {
    state: {
        searchResult: {
            /* 品牌 */
            trademarkList: [],
            /* 可选分类属性 */
            attrsList: [],
            /* 商品列表 */
            goodsList: []
        }
    },
    getters: {
        trademarkList(state) {
            return state.searchResult.trademarkList
        },
        attrsList(state) {
            return state.searchResult.attrsList
        },
        goodsList(state) {
            return state.searchResult.goodsList
        },
    },
    actions: {
        async getSearch({ commit }, data={}) {
            const searchResult = await reqSearch(data)
            console.log(searchResult)
            commit("WRITE_SEARCHRESULTS", searchResult)
        }
    },
    mutations: {
        WRITE_SEARCHRESULTS(state, searchResult) {
            state.searchResult = searchResult
        }
    },
}
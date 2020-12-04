import { reqSearch } from "@api/search"
export default {
    state: {
        searchResult: {
            trademarkList:{},
            attrsList:{},
            goodsList:{},
            total:0
        },
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
        total(state) {
            return state.searchResult.total
        },
    },
    actions: {
        async getSearch({ commit }, data = {}) {
            const searchResult = await reqSearch(data)
            commit("WRITE_SEARCHRESULTS", searchResult.data)
        }
    },
    mutations: {
        WRITE_SEARCHRESULTS(state, searchResult) {
            state.searchResult = searchResult
        }
    },
}
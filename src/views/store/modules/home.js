import { reqHome } from "@api/home";
export default {
    state: {
        categorys: []
    },
    getters: {},
    actions: {
        async getCategorys({commit}) {
            const categoryLists = await reqHome()
            commit("WRITECATEGORY",categoryLists)
        }
    },
    mutations: {
        WRITECATEGORY(state,categoryLists){
            state.categorys = categoryLists
        }
    }
}
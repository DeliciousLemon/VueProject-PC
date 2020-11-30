import { reqHome,reqBanner} from "@api/home";
export default {
    state: {
        categorys: [],
        banners: []
    },
    getters: {},
    actions: {
        async getCategorys({ commit }) {
            const categoryLists = await reqHome()
            commit("WRITECATEGORY", categoryLists)
        },
        async getBanners({ commit }) {
            const banners = await reqBanner()
            commit("WRITE_BANNER", banners)
        }
    },
    mutations: {
        WRITECATEGORY(state, categoryLists) {
            state.categorys = categoryLists
        },
        WRITE_BANNER(state, banners) {
            state.banners = banners
        }
    }
}
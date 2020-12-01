import { reqHome, reqBanner, reqFloorBanner } from "@api/home";
export default {
    state: {
        categorys: [],
        banners: [],
        floorBanners: []
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
        },
        async getFloorBanners({ commit }) {
            const floorBanners = await reqFloorBanner()
            commit("WRITE_FLOOR_BANNER", floorBanners)
        },
    },
    mutations: {
        WRITECATEGORY(state, categoryLists) {
            state.categorys = categoryLists
        },
        WRITE_BANNER(state, banners) {
            state.banners = banners
        },
        WRITE_FLOOR_BANNER(state, floorBanners) {
            state.floorBanners = floorBanners
        },
    }
}
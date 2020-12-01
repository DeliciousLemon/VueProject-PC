import { reqHome, reqBanner, reqFloorBanner, reqFloorCont } from "@api/home";
export default {
    state: {
        categorys: [],
        banners: [],
        floorBanners: [],
        floorConts: []
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
        async getFloorCont({ commit }) {
            const floorConts = await reqFloorCont()
            commit("WRITE_FLOOR_CONT", floorConts)
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
        WRITE_FLOOR_CONT(state, floorConts) {
            state.floorConts = floorConts
        },
    },


}
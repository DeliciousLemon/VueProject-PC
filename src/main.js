import Vue from "vue"
import App from "./App"
import store from "@views/store"
import router from "./router"
import lazyload from "./plugins/lazyload"
import './plugins/element.js'
import "./mock/mockServer"
import "./style/iconfont-search.css"
import "./style/iconfont-login.css"
Vue.config.ProductionTip = false

new Vue({
    beforeCreate(){
        Vue.prototype.$bus = this
    },
    render: h => h(App),
    router,
    store,
    lazyload
}).$mount("#app")
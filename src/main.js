import Vue from "vue"
import App from "./App"
import store from "@views/store"
import router from "./router"
import './plugins/element.js'
import "./mock/mockServer"
import "./style/iconfont.css"
Vue.config.ProductionTip = false

new Vue({
    beforeCreate(){
        Vue.prototype.$bus = this
    },
    render: h => h(App),
    router,
    store
}).$mount("#app")
import Vue from "vue"
import App from "./App"
import store from "@views/store"
import router from "./router"
import './plugins/element.js'
import "./mock/mockServer"
Vue.config.ProductionTip = false

new Vue({
    render: h => h(App),
    router,
    store
}).$mount("#app")
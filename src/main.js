import Vue from "vue"
import App from "./App"

import router from "./router"
import './plugins/element.js'
Vue.config.ProductionTip = false

new Vue({
    render: h => h(App),
    router
}).$mount("#app")
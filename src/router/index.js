import Vue from "vue"
import VueRouter from "vue-router"

import Home from "../views/Home"
import Register from "../views/Register"
import Login from "../views/Login"
import Search from "../views/Search"

Vue.use(VueRouter)

//重写push和replace
const push = VueRouter.prototype.push
const replace = VueRouter.prototype.replace

VueRouter.prototype.push = function (localtion, ontemplate, onAbort) {
    if (ontemplate && onAbort) {
        return push.call(this, localtion, ontemplate, onAbort)
    }
    push.call(this, localtion, ontemplate, () => { })
}
VueRouter.prototype.replace = function (localtion, ontemplate, onAbort) {
    if (ontemplate && onAbort) {
        return replace.call(this, localtion, ontemplate, onAbort)
    }
    push.call(this, localtion, ontemplate, () => { })
}


export default new VueRouter({
    routes: [
        {
            path: "/",
            component: Home
        },
        {
            path: "/register",
            component: Register,
            meta: {
                isFooterShow: true
            }
        },
        {
            path: "/login",
            component: Login,
            meta: {
                isFooterShow: true
            }
        },
        {
            name: "search",
            path: "/search/:searchText?",
            component: Search
        },
    ]
})
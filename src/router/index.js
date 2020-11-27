import Vue from "vue"
import VueRouter from "vue-router"

import Home from "../views/Home"
import Register from "../views/Register"
import Login from "../views/Login"
import Search from "../views/Search"

Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path:"/",
            component:Home
        },
        {
            path:"/register",
            component:Register
        },
        {
            path:"/login",
            component:Login
        },
        {
            path:"/search",
            component:Search
        },
    ]
})
import Vue from "vue"
import VueRouter from "vue-router"

/* import Home from "@views/Home"
import Register from "@views/Register"
import Login from "@views/Login"
import Search from "@views/Search"
import Detail from "@views/Detail"
import AddCartSuccess from "@views/AddCartSuccess"
import MyCart from "@views/MyCart"
import Pay from "@views/Pay"
import Order from "@views/Order"
import Center from "@views/Center" */
//路由懒加载
const Home = () => import(/*webpackChunkName:"Home"*/"@views/Home")
const Register = () => import(/*webpackChunkName:"Register"*/"@views/Register")
const Login = () => import(/*webpackChunkName:"Login"*/"@views/Login")
const Search = () => import(/*webpackChunkName:"Search"*/"@views/Search")
const Detail = () => import(/*webpackChunkName:"Detail"*/"@views/Detail")
const AddCartSuccess = () => import(/*webpackChunkName:"AddCartSuccess"*/"@views/AddCartSuccess")
const MyCart = () => import(/*webpackChunkName:"MyCart"*/"@views/MyCart")
const Pay = () => import(/*webpackChunkName:"Pay"*/"@views/Pay")
const Order = () => import(/*webpackChunkName:"Order"*/"@views/Order")
const Center = () => import(/*webpackChunkName:"Center"*/"@views/Center")

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
    replace.call(this, localtion, ontemplate, () => { })
}


const router = new VueRouter({
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
            name: "register",
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
        {
            name: "detail",
            path: "/detail/:id",
            component: Detail
        },
        {
            name: "addcartsuccess",
            path: "/addcartsuccess",
            component: AddCartSuccess
        },
        {
            name: "mycart",
            path: "/mycart",
            component: MyCart
        },
        {
            name: "pay",
            path: "/pay",
            component: Pay
        },
        {
            name: "order",
            path: "/order",
            component: Order
        },
        {
            name: "center",
            path: "/center",
            component: Center
        }
    ],
    //页面默认位置
    scrollBehavior() {
        return { x: 0, y: 0 }
    }
})

//路由前置守卫
//判断是否是由商品详情页跳转到添加购物车成功页面
router.beforeEach((to, from, next) => {
    if (to.path === "/addcartsuccess") {
        if (from.path.includes("detail")) {
            next()
        } else {
            next("/mycart")
        }
    }
    next()
})
export default router
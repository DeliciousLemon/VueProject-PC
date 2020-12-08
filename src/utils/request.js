import axios from "axios"
import NProgress from "nprogress"
import { Message } from "element-ui"
import "nprogress/nprogress.css";

const instance = axios.create({
    baseURL: "/api",
})
const sessionToken = sessionStorage.getItem("token")
const cookieToken = document.cookie && document.cookie.split(";").filter(item=>{
    return item.includes("token")
})[0].split("=")[1]
instance.interceptors.request.use(
    (req) => {
        NProgress.start()
        req.headers.token = sessionToken || cookieToken
        return req
    }
)
instance.interceptors.response.use(
    //请求成功
    res => {
        //功能成功
        if (res.data.code === 200) {
            NProgress.done()
            return res.data
        }
        //功能失败
        NProgress.done()
        console.log(typeof(res.data.data))
        typeof(res.data.data) === "object" ?
            Message.error(res.data.message) :
            Message.error(res.data.data)
        return Promise.reject(res.data)
    },
    //请求失败
    err => {
        NProgress.done()
        const message = err.message || "网络出现问题"
        Message.error(message)
        return Promise.reject(err)
    }
)
export default instance
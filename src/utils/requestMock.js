import axios from "axios"
import NProgress from "nprogress"
import { Message } from "element-ui"
import "nprogress/nprogress.css";

const instance = axios.create({
    baseURL: "/mock",
})
instance.interceptors.request.use(
    (req) => {
        NProgress.start()
        return req
    }
)
instance.interceptors.response.use(
    res => {
        if(res.data.code === 200){
            NProgress.done()
            return res.data.data
        }
        NProgress.done()
        Message.error(res.data.message)
        return Promise.reject(res.data.message)
    },
    err => {
        NProgress.done()
        const message = err.message || "网络出现问题"
        Message.error(message)
        return Promise.reject(err)
    }
)
export default instance
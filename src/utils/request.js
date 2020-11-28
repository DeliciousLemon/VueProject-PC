import axios from "axios"
import NProgress from "nprogress"
import "nprogress/nprogress.css";
const instance = axios.create({
    baseURL: "http://182.92.128.115/api",
})
instance.interceptors.request.use(
    () => {
        NProgress.start()
    }
)
instance.interceptors.response.use(
    res => {
        NProgress.done()
        console.log(res, "响应拦截器------------------")
        return res.data.data
    },
    err => {
        NProgress.done()
        console.log(err, "响应拦截器------------------")
        return Promise.reject(err)
    }
)
export default instance
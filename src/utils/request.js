import axios from "axios"
const instance = axios.create({
    baseURL: "http://182.92.128.115/api",
})

instance.interceptors.response.use(
    res => {
        console.log(res,"响应拦截器------------------")
        return res.data.data
    },
    err => {
        console.log(err,"响应拦截器------------------")
        return Promise.reject(err)
    }
)
export default instance
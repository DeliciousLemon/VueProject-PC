import request from "@utils/request"

export const reqUserData = () => {
    return request({
        method:"GET",
        url:"/order/auth/trade"
    })
}
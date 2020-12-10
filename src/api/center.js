import request from "@utils/request"
//获取用户订单
export const reqCenter = ({page,limit}) => {
    return request({
        method: "GET",
        url: `/order/auth/${page}/${limit}`
    })
}
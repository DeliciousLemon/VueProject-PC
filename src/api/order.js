import request from "@utils/request"
//获取用户地址数据和购物车数据
export const reqUserData = () => {
    return request({
        method: "GET",
        url: "/order/auth/trade"
    })
}
//提交订单
export const reqOrder = (tradeNo,userOrder) => {
    return request({
        method:"POST",
        url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,
        data:userOrder
    })
}
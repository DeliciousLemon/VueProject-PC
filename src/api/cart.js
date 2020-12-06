import request from "@utils/request"

export const reqCartList = function () {
    return request({
        method: "GET",
        url: "/cart/cartList"
    })
}
export const reqCartCount = function (skuID,skuNum) {
    return request({
        method: "POST",
        url: `/cart/addToCart/${skuID}/${skuNum}`,
        data: {}
    })
}
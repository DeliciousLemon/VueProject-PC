import request from "@utils/request"

export const reqDetail = function (detailID) {
    return request({
        method: "GET",
        url: `/item/${detailID}`
    })
}
export const reqAddCart = function (skuID,skuNum) {
    return request({
        method: "POST",
        url: `/cart/addToCart/${skuID}/${skuNum}`,
        data:{}
    })
}
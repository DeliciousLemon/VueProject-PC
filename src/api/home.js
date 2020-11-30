import request from "@utils/request"
import requestMock from "@utils/requestMock"

export const reqHome = function () {
    return request({
        method: "GET",
        url: "/product/getBaseCategoryList"
    })
}
export const reqBanner = function () {
    return requestMock({
        method: "GET",
        url: "/banner"
    })
}
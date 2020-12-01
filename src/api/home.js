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
export const reqFloorBanner = function () {
    return requestMock({
        method: "GET",
        url: "/floor"
    })
}
export const reqFloorCont = function () {
    return requestMock({
        method: "GET",
        url: "/floorCont"
    })
}
import request from "@utils/request"

export const reqDetail = function (detailID) {
    return request({
        method: "GET",
        url: `/item/${detailID}`
    })
}
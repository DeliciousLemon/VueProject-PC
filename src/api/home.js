import request from "@utils/request"

export const reqHome = function(){
    return request({
        method:"GET",
        url:"/product/getBaseCategoryList"
    })
}
import request from "@utils/request"

export const reqSearch = function(data){
    return request({
        method:"POST",
        url:"/list",
        data
    })
}
import request from "@utils/request"

export const reqRegister = (phone, password, code) => {
    return request({
        method: "POST",
        url: "user/passport/register",
        data: {
            phone, password, code
        }
    })
}
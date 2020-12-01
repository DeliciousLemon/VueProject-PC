const Mock = require("mockjs")
import banner from "./rbanner.json"
import floorBanner from "./rfloorBanner"
import floor from "./rfloor"

Mock.mock("/mock/banner","get",{
    code:200,
    "data|6":banner
})
Mock.mock("/mock/floor","get",{
    code:200,
    "data|3":floorBanner
})
Mock.mock("/mock/floorCont","get",{
    code:200,
    "data":floor
})
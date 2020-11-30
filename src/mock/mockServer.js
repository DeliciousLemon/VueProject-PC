const Mock = require("mockjs")
import banner from "./rbanner.json"

Mock.mock("/mock/banner","get",{
    code:200,
    "data|6":banner
})
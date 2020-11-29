const path = require("path")
module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                "@views": path.resolve(__dirname, "src/views"),
                "@utils": path.resolve(__dirname, "src/utils"),
                "@api": path.resolve(__dirname, "src/api"),
            }
        }
    },
    devServer: {
        proxy: {
            "/api": {
                target: "http://182.92.128.115",
                changeOrigin: true
            }
        }
    }
}
const path = require('path')
const webpack = require('webpack')
module.exports = {
    lintOnSave: false,
    publicPath: './',
    assetsDir: './static/',
    devServer: {
        disableHostCheck: true,
    }
}
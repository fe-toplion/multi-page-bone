let path = require('path');
let merge = require('webpack-merge');
let HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
let baseWebpackConfig = require('./webpack.base.conf');
const devConfig = require('../config');

module.exports = merge(baseWebpackConfig, {
    mode: 'development',
    plugins: getPlugins()
})

function getPlugins() {
    let plugins = [new VueLoaderPlugin()];
    devConfig.devPages.forEach(page => {
        plugins.push(new HtmlWebpackPlugin({
            filename: `${page}/index.html`,
            template: `./src/${page}/index.html`
        }))
    })
    return plugins;
}
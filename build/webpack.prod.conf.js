let path = require('path');
let merge = require('webpack-merge');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let {CleanWebpackPlugin} = require('clean-webpack-plugin');
let { VueLoaderPlugin } = require('vue-loader');
let baseWebpackConfig = require('./webpack.base.conf');
let devConfig = require('../config');

module.exports = merge(baseWebpackConfig, {
    mode: 'production',
    plugins: getPlugins()
})

function getPlugins() {
    let plugins = [
        new CleanWebpackPlugin(),
        new VueLoaderPlugin()
    ];
    devConfig.devPages.forEach(page => {
        plugins.push(new HtmlWebpackPlugin({
            filename: `${page}/index.html`,
            template: `./src/${page}/index.html`
        }))
    })
    return plugins;
}
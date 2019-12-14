const path = require('path');
const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

let devPage = require('../config').devPages[0];
const env = process.env.NODE_ENV;
const webpackConfig = require('./webpack.dev.conf');
const options = {
    host: 'test.m.iqiyi.com',
    hot: true,
    open: true,
    openPage: `${devPage}/index.html`
};

webpackDevServer.addDevServerEntrypoints(webpackConfig, options); // 支持HMR

const compiler = webpack(webpackConfig);
const server = new webpackDevServer(compiler, options);

server.listen(80, 'test.m.iqiyi.com', () => {
    console.log('dev server listening on port 80');
});
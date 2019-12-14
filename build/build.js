const webpack = require('webpack');
const webpackConfig = require('./webpack.prod.conf');


const compiler = webpack(webpackConfig);
compiler.run(function(err, stats) {
    console.log(stats.toString({
        chunks: false,
        colors: true
    }));
});
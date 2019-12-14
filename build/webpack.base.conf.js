const path = require('path');
const fs = require('fs');

const config = require('../config');
const devPages = config.devPages;
const env = process.env.NODE_ENV;
console.log(env);

function getEntry(src) {
    let pages = fs.readdirSync(src);
    let jsEntry = {};
    for (let i = 0; i < pages.length; i++) {
        if (!fs.existsSync(path.join(src, pages[i], 'app.js'))) { //判断是否存在入口app.js文件
            continue;
        }
        let key, entry;
        if (devPages && devPages.length > 0) { //只编译当前开发活动页面，提高编译速度，节约时间成本
            if (devPages.indexOf(pages[i]) >= 0) {
                key = env == 'local' ? `${pages[i]}/app.js` : path.join(pages[i], pages[i] + '_app.js');
                jsEntry[key] = path.join(src, pages[i], 'app.js');
            }
            continue;
        }
        key = env == 'local' ? `${pages[i]}/app.js` : path.join(pages[i], pages[i] + '_app.js');
        jsEntry[key] = path.join(src, pages[i], 'app.js');
    }

    console.log(jsEntry)
    return jsEntry;
}

module.exports = {
    entry: getEntry(path.join(__dirname, '../src')),
    output: {
        path: path.join(__dirname, '../dist/'),
        filename: '[name]',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_module/
            },
            {
                test:/\.vue$/,
                use:{
                    loader:'vue-loader'
                }
            }
        ]
    }
}
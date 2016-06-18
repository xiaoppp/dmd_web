var path = require('path');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app/js');
var BUILD_PATH = path.resolve(ROOT_PATH, 'app/build');

module.exports = {
    entry: {
        index: path.resolve(APP_PATH, 'index.js'),
        vendor1: ['superagent', 'q', 'vue','vuex','moment','js-htmlencode','qrcodejs','clipboard']
    },
    output: {
        path: BUILD_PATH,
        filename: '[name].js'
    },
    module: {
        perLoaders: [{
            test: /\.js?$/,
            include: APP_PATH,
            loader: 'jshint-loader'
        }],
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel',
            include: APP_PATH,
            query: {
                presets: ['es2015']
            }
        }, {
            test: /\.vue$/,
            loader: 'vue'
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ["vendor1"],
            minChunks: Infinity
        })
        // new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ]
};

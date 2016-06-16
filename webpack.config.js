var path = require('path');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app/js');
var BUILD_PATH = path.resolve(ROOT_PATH, 'app/build');

module.exports = {
    entry: {
        index: path.resolve(APP_PATH, 'index.js'),
		vendor:['superagent', 'q', 'vue']
    },
    output: {
        path: BUILD_PATH,
        filename: '[name].js'
    },
    module: {
        perLoaders: [{
            test: /\.js$/,
            include: APP_PATH,
            loader: 'jshint-loader'
        }],
        loaders: [{
            test: /\.(js|jsx|es6)$/,
            loader: 'babel',
            include: APP_PATH,
            query: {
                presets: ['es2015']
            }
        },{
            test: /\.vue$/,
            loader: 'vue'
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
		new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
    ]
};

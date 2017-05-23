var webpack = require('webpack');
var path = require('path');
var express = require('express');

module.exports = {
    //页面入口文件配置
    entry: {
        star: ['./dev/star.js'],
        app: ['./dev/app.js']
    },
    output: {
        filename: './bundle/[name].js'
    },
    module: {
        // avoid webpack trying to shim process
        noParse: /es6-promise\.js$/,
        loaders: [
        { test: /\.less/, loader: 'style-loader!css-loader!less-loader!postcss-loader' },
        { test: /\.css$/, loader: 'style-loader!css-loader!postcss-loader' },
        { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192&name=/LVBPages/resources/img/[name].[ext]' }, // 内联 base64 URLs, 限定 <=8k 的图片, 其他的用 URL
        { test: /\.vue$/, loader: 'vue' },
        {
            test: /\.js$/,
            // excluding some local linked packages.
            // for normal use cases only node_modules is needed.
            exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
            loader: 'babel'
        }
        ]

    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
   // devtool: 'source-map',
    resolve: { //解决方案配置
        root: [
        path.resolve('./modules/')
        ],
        alias: { //模块简称
            //extend: 'tools/extend',
            //jsonp: 'tools/jsonp',
            //datetime: 'tools/datetime',
            //fixed: 'tools/fixed',
            //date_transform: 'tools/date_transform',
            //common: 'tools/common',
            //default_theme: "theme/default"
        }
    },
    plugins: [
       // new webpack.ProvidePlugin({
       //     $: 'jquery'
       // }),
       new webpack.optimize.UglifyJsPlugin({
           compress: {
               warnings: false
           }
       })
    ]
};


var path = require('path');
var webpack = require('webpack');
     
 module.exports = {
     entry: './js/app.js',
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: 'app.bundle.js'
     },
     module: {
         loaders: [
             {
                 test: /\.jsx?$/,
                 loader: 'babel-loader',
                 exclude: /node_modules/,
                 query: {
                     presets: ['es2015', 'react']
                 }
             }
         ]
     },
     stats: {
         colors: true
     },
     externals:[{
        xmlhttprequest: '{XMLHttpRequest:XMLHttpRequest}'
    }],
    devtool: 'cheap-module-source-map'
 };
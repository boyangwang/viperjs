'use strict';
const path = require('path');

module.exports = [{
    name: 'node',
    target: 'node',
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
                presets: ['es2015'],
            },
        }, {
            test: /\.json$/,
            loader: 'json-loader',
        }],
    },
    entry: path.join(__dirname, './app.js'),
    output: {
        path: path.join(__dirname),
        filename: 'app.bundle.js',
    },
}, {
    name: 'web',
    target: 'web',
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
                presets: ['es2015'],
            },
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader',
        }],
    },
    entry: path.join(__dirname, './public/js/main.js'),
    output: {
        path: path.join(__dirname, './public/js/'),
        filename: 'bundle.js',
    },
}];

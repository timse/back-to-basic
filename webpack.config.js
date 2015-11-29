var path = require('path');

module.exports = {
    entry: {
        b2b: './index.js'
    },
    output: {
        path: __dirname,
        filename: "[name].js",
        library: "b2b",
        libraryTarget: "umd"
    },
    module: {
        loaders: [
            {
                test: /.*\.js$/,
                loader: 'babel'
            }
        ]
    }
};

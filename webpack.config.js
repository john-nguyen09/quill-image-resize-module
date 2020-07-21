var path = require('path');

const environment = process.env.NODE_ENV || 'development';

module.exports = {
    entry: "./src/ImageResize.js",
    mode: environment,
    output: {
        path: path.join(__dirname, 'dist'),
        library: 'ImageResize',
        libraryTarget: 'umd',
        filename: "image-resize.min.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'src'),
                exclude: /(node_modules|bower_components)/,
                use: [{
                    loader: 'babel-loader',
                }]
            }
        ]
    }
};

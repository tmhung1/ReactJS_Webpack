const path = require('path');
const webpack =require('webpack');
const VENDOR_LIP = [
    "bootstrap",
    "jquery",
    "random-string",
    "react",
    "react-dom",
    "react-redux",
    "redux"
];

module.exports = {
    entry : {
        bundle : './src/index.js',
        vendor : VENDOR_LIP
    },
    output : {
        filename : '[name].js',
        path : path.join(__dirname,"dist")
    },
    module : {
        rules : [
            {
                use : 'babel-loader',
                test : /\.js$/,
                exclude : '/node_modules/'
            },
            {
                use : ['style-loader', 'css-loader'],
                test : /\.css$/
            },
            {
                loader : 'file-loader',
                test : /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.woff2$|\.eot$|\.ttf$|\.wav$|\.mp3$|\.ico$/
            }
        ]
    },
    plugins : [
        new webpack.ProvidePlugin({
            '$' : 'jquery',
            'jQuery' : 'jquery',
            'window.$' :'jquery',
            'window.jQuery' : 'jquery',
            Popper: ['popper.js', 'default']
        })
    ],
    optimization : {
        splitC
    }

}
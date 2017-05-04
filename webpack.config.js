const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
module.exports={
    devtool: 'eval-source-map',
    entry:path.resolve(__dirname,'src/index.js'),
    output:{
        path:path.resolve(__dirname,'public'),
        filename:'bundle.js'
    },
    module:{
        loaders:[
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                query:{compact:false}
            },
            {
                test:/\.(png|jpg|svg|ico)$/,
                loaders:['url-loader']
            }
        ]
    },
    devServer: {
        contentBase:path.resolve(__dirname,'public'),
        port:8000,
        hot: true // hot module replacement. Depends on HotModuleReplacementPlugin
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}
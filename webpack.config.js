const path = require('path')
module.exports={
    devtool: 'eval-source-map',
    entry:['webpack/hot/dev-server',path.resolve(__dirname,'src/index.js')],
    output:{
        path:path.resolve(__dirname,'public'),
        filename:'bundle.js'
    },
    module:{
        loaders:[
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader'
            },
            {
                test:/\.(png|jpg|svg|ico)$/,
                loaders:['url-loader']
            }
        ]
    },
    devServer: {
        contentBase:path.resolve(__dirname,'public'),
        port:8000
    }
}
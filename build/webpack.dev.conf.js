const {merge} = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const webpack = require('webpack')

const devWebpackConfig = merge(baseWebpackConfig, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer:{
        //contentBase: baseWebpackConfig.externals.paths.dist,
        overlay: true
    },
    plugins:[
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map'
        })
    ]

})

module.exports = new Promise((resolve, rejects)=>{
    resolve(devWebpackConfig)
})





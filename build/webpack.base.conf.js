const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const fs = require('fs')
const path = require('path')
const webpack = require('webpack')

const PATHS ={
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../dist'),
    assets: 'assets/'
}
const PAGES = fs.readdirSync(PATHS.src).filter(filename => filename.endsWith('.pug'))

module.exports={
    externals:{
        paths: PATHS

    },
    entry:{
        app: PATHS.src
    },
    output: {
        filename: `${PATHS.assets}js/[name].js`,
        path: PATHS.dist,
        //publicPath: '/'
    },
    module:{
        rules:[
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                exclude: '/node_modules/'
            },
        {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: '/node_modules/'
        },
        {
            test: /\.scss$/,
            use:[
                'style-loader',
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options:{sourceMap:true}
                },{
                    loader:'sass-loader',
                    options:{sourceMap:true}
                }
            ]
           
        },
        {
            test: /\.css$/,
            use:[
                MiniCssExtractPlugin.loader,
                'css-loader'
            ] 
        },
        {
            test: /\.(png|svg|gif|jpg)$/,
            loader: 'file-loader',
            options:{
                name:'[name].[ext]'
            }
        },
         {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file-loader',
            options:{
                name:'[name].[ext]',
                outputPath: `${PATHS.assets}fonts`
                
            }
        }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: `./[name].css`,
        }),
        new CopyWebpackPlugin({
            patterns:[
                {from: `${PATHS.src}/assets/img`, to:`${PATHS.assets}img`},
                {from: `${PATHS.src}/assets/fonts`, to:`${PATHS.assets}fonts`}
        ]}),
        new webpack.ProvidePlugin({
            $:'jquery',
            jQuery: 'jquery',
            'window.jquery':'jquery' 
          }),

        ...PAGES.map(page => new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/${page}`,
            filename: `./${page.replace(/\.pug/,'.html')}`
        })  )
    ]

}
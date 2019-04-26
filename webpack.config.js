const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    entry:path.join(__dirname,'./src/main.js'),
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    devServer:{
        open:true,
        port:3000,
        contentBase:'src',
        hot:true
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),
            filename:'index.html'//指定生成的页面名称
        }),
        new VueLoaderPlugin()
        
    ],
    module:{
        //这个节点，用于配置，所有第三方模块 加载器
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},

            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},

            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},

            {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=76760&name=[hash:8]-[name].[ext]'},

            {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},

            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},

            {test:/\.vue$/,use:'vue-loader'}
        ]
    },
    resolve:{
        alias:{
            "vue$":"vue/dist/vue.js"
        }
    }
}


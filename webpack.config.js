/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2019-10-09 10:34:44
 * @version $Id$
 */

const path = require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    devServer:{
        contentBase:path.join(__dirname, "dist"),
        port:8080,           //指定端口号，默认是8080
        //host:'0.0.0.0',
        hot:true               //热模块加载（其实就是我们的代码更改了，页面不用刷新就会自动加载）       
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                    test: require.resolve('jquery'), //require.resolve 用来获取模块的绝对路径
                    use: [{
                        loader: 'expose-loader',
                        options: 'jQuery'
                    }, {
                        loader: 'expose-loader',
                        options: '$'
                    }]
            }
        ],
        
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title:'AI typescript学习',
            template:'./src/index.html'
        })
    ]
}
//2018.1.30
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const root = process.cw();   //项目根目录

module.exports = {
	devtool:"source-map", //配置生成 Source Maps 的选项
	entry:__dirname + "/app/main.js",//入口文件路径   当前文件
	output:{
		path:__dirname+"/build/", //存放打包后文件的地方
		filename:"[name]-[hash].js" //打包后的文件名
	},
	devServer: {
		contentBase:"./public",
		port:"9000",
		inline:true,
		historyApiFallback:true,
	},
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/, //编译打包时需要排除 node_modules 文件夹
                loader: "babel-loader"
            },
            {
                test:/\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:"css-loader?modules!postcss-loader"
                })
            }
        ]
    },
     plugins: [
        new webpack.BannerPlugin("Copyright Flying Unicorns inc."),//在这个数组中new一个实例就可以了
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html" //new一个插件的实例，并传入相关的参数
        }),
        new webpack.HotModuleReplacementPlugin(),//热加载插件
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("[name]-[hash].css")
    ]
}
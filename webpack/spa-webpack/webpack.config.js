const WebpackDeepScopeAnalysisPlugin = require('webpack-deep-scope-plugin').default;
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 提取css
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const PurifyCSSPlugin = require('purifycss-webpack');
const glob = require('glob')
const path = require('path')
const webpackConfig = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    // 'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        // 对style-loader的配置信息 用对象
                        loader: 'css-loader',
                        // 对css-loader的配置
                        options: {
                            // modules: {
                            //     localIdentName: '[name]_[local]--[hash:base64:5]'
                            // }
                        }
                    }]
            }
        ]
    },
    plugins: [
        new WebpackDeepScopeAnalysisPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        new PurifyCSSPlugin({
            // Give paths to parse for rules. These should be absolute!
            paths: glob.sync(path.join(__dirname, 'app/*.html')),
        })
    ],

}
module.exports = webpackConfig
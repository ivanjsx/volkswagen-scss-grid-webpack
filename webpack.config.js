const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 

module.exports = (env, argv) => {
    return {
        entry: {
            main: "./src/index.js" 
        },
        output: {
            path: path.resolve(__dirname, "./build"),
            filename: "main.js",
            publicPath: ""
        },
        mode: argv.mode || "development",
        devServer: {
            static: path.resolve(__dirname, "./build"),
            compress: true,
            port: 8080,
            open: false
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: 'babel-loader',
                    exclude: '/node_modules/'
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif|woff(2)?|ttf|otf)$/,
                    type: 'asset/resource'
                },
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader, 
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1
                            }
                        },
                        'postcss-loader'
                    ]
                }, 
                {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader, 
                        "css-loader", 
                        "postcss-loader", 
                        "resolve-url-loader",
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true,
                                sassOptions: {
                                    includePaths: [
                                        "src/scss"
                                    ]
                                }
                            }
                        }
                    ],
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin(
                {
                    template: './src/index.html',
                    inject: 'body'
                }
            ),
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin()
        ]
    }
};

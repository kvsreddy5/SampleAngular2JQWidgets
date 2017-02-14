var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

module.exports = {
    entry: {
        "polyfills": "./angular2App/polyfills.ts",
        "vendor": "./angular2App/vendor.ts",
        "app": "./angular2App/app/main.dev.ts"
    },
    resolve: {
        extensions: ['', '.ts', '.js', '.json', '.css', '.scss', '.html'],
        modules: [path.join(__dirname, "node_modules")]
    },
    output: {
        path: "./wwwroot",
        filename: "js/[name]-[hash:8].bundle.js"
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: "ts",
            },
            {
                test: /\.html$/,
                loader: "html",
            },
            {
                test: /\.(png|jpg|gif|ico|woff|woff2|ttf|svg|eot)$/,
                loader: "file?name=assets/[name]-[hash:6].[ext]",
            }, 
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
            ,
            {
                test: require.resolve('jquery'),
                loader: 'expose?$!expose?jQuery',                
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin("css/[name]-[hash:8].bundle.css"),
         new webpack.ProvidePlugin({
             jQuery: 'jquery',
             $: 'jquery',
             jquery: 'jquery'
         }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ["app", "vendor", "polyfills"]
        }),
        new CleanWebpackPlugin(
            [
                "./wwwroot/"
            ]
        ),
        new HtmlWebpackPlugin({
            template: "./angular2App/index.html",
            inject: "body",
            favicon: './angular2App/favicon.ico',
        }),
        new CopyWebpackPlugin([
                {
                    context: path.join(__dirname, '/angular2App/app/'),
                    from: '*',
                    to: path.join(__dirname, 'wwwroot')
                },
                  {
                      context: path.join(__dirname, '/angular2App/app/'),
                      from: '*/*',
                      to: path.join(__dirname, 'wwwroot')
                  },
        ],
                { ignore: ['*.txt', '*.ts', '*.js', '*.map', ], copyUnmodified: true }
            )

    ],
    devServer: {
        historyApiFallback: true,
        stats: "minimal"
    }
};
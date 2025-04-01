const currentTask = process.env.npm_lifecycle_event;

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fse = require('fs-extra');

const postCSSplugins = [
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer')
];

class RunAfterCompile {
    apply(compiler) {
        compiler.hooks.done.tap('Copy Images', function() {
            fse.copySync('./app/assets/images', './dist/assets/images');
        })
    }
}

let cssConfig = {
    test: /\.css$/i,
    use: [{loader: "css-loader", options: {url: false}}, {loader: 'postcss-loader', options: {postcssOptions:{
        plugins: postCSSplugins
    }}}]
};

let config = {
    entry: './app/assets/scripts/App.js',
    plugins: [new HtmlWebpackPlugin({filename: 'index.html', template: './app/index.html'})],
    module: {
        rules: [
            cssConfig
        ]
    }
};

if (currentTask == 'dev') {
    cssConfig.use.unshift('style-loader');
    config.output = {
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'app')
    };
    config.devServer = {
        watchFiles: ["app/**/*.html"],
        static: {
            directory: path.join(__dirname, "app"),
            watch: false
        },
        hot: true,
        port: 3000
    };
    config.mode = 'development';
}

if (currentTask == 'build') {
    config.module.rules.push({
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
            }
        }
    });
    cssConfig.use.unshift(MiniCssExtractPlugin.loader);
    config.output = {
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    };
    config.mode = 'production';
    config.optimization = {
        splitChunks: {chunks: 'all'},
        minimize: true,
        minimizer: [`...`, new CssMinimizerPlugin()]
    };
    config.plugins.push(
        new MiniCssExtractPlugin({filename: 'styles.[chunkhash].css'}),
        new RunAfterCompile()
    );
}


module.exports = config;
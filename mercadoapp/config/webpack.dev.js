const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
    mode: 'development',
    output: {
        publicPath: 'http://localhost:8081/',
    },
    devServer: {
        port: 8081,
        historyApiFallback: {
            historyApiFallback: true,
        },
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'mercadoApp',
            filename: 'remoteEntry.js',
            exposes: { './MercadoApp': './src/bootstrap' },
            shared: {
                ...packageJson.dependencies,
                react: {
                    singleton: true,
                    requiredVersion: packageJson.dependencies.react,
                },
                'react-dom': {
                    singleton: true,
                    requiredVersion: packageJson.dependencies['react-dom'],
                },
                'react-router-dom': {
                    singleton: true,
                    requiredVersion: packageJson.dependencies['react-router-dom'],
                },
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
};

module.exports = merge(commonConfig, devConfig);
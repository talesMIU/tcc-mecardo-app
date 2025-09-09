const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');
const commonConfig = require('./webpack.common');

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/mercado-app/latest/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'mercadoApp',
      filename: 'remoteEntry.js',
      exposes: {
        './MercadoApp': './src/bootstrap',
      },
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
  ],
};

module.exports = merge(commonConfig, prodConfig);

const path = require('path');
const { config } = require('webpack');

const webpackConfig = config.getNormalizedWebpackOptions({
  entry: './src/index.ts',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  }
});

const modeIndex = process.argv.indexOf('--mode') + 1;

if (process.argv[modeIndex] === 'development')
  webpackConfig.devtool = 'inline-source-map';

module.exports = webpackConfig;
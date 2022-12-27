const path = require('path');
const { config } = require('webpack');

module.exports = config.getNormalizedWebpackOptions({
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  }
})
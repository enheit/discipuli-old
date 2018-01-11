import path from 'path';
import webpack from 'webpack';

const browserDevConfig = {
  output: {
    path: path.resolve(__dirname, '../../static'),
    filename: 'browser.bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

export default browserDevConfig;

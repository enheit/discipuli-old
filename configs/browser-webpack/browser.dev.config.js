import path from 'path';
import webpack from 'webpack';

const browserDevConfig = {
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    './client/client.jsx',
  ],
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

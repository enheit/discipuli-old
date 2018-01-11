import path from 'path';
import webpack from 'webpack';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';

const serverProdConfig = {
  output: {
    path: path.resolve(__dirname, '../../static'),
    filename: 'server.bundle.min.js',
    publicPath: '/'
  },
  plugins: [
    /**
     * Use UglifyJSPlugin to minify JavaScript code
     * and enable tree shaking
     */
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
};

export default serverProdConfig;
import path from 'path';
import webpack from 'webpack';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';


const browserProdConfig = {
  entry: './client/client.jsx',
  output: {
    path: path.resolve(__dirname, '../../static'),
    filename: 'browser.bundle.min.js'
  },
  plugins: [
    /**
     * Use UglifyJSPlugin to minify JavaScript code
     * and enable tree shaking
     */
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
  ],
};

export default browserProdConfig;
import path from 'path';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';

const prodConfig = {
  output: {
    path: path.resolve(__dirname, '../static'),
    filename: 'browser.bundle.min.js'
  },
  plugins: [
    /**
     * Use UglifyJSPlugin to minify JavaScript code
     * and enable tree shaking
     */
    new UglifyJSPlugin()
  ]
};

export default prodConfig;
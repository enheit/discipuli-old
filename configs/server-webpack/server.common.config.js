import nodeExternals from 'webpack-node-externals';

const serverCommonConfig = {
  name: 'server',
  entry: './server/server.js',
  /**
   * The target: 'node' option tells webpack not to touch any built-in modules
   * like fs or path.
   */
  target: 'node',
  externals: [nodeExternals()],
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        /**
         * Use babel-loader to execute js/jsx files
         * babel-preset-env for compiling Javascript ES6 code down to ES5
         * babel-preset-react for compiling JSX and other stuff down to Javascript
         */
        use: 'babel-loader'
      },
      {
        test: /.html$/,
        exclude: /node_modules/,
        use: 'html-loader'
      },
      {
        test: /\.graphql?$/,
        loader: 'webpack-graphql-loader'
      },
    ]
  },
}

export default serverCommonConfig;
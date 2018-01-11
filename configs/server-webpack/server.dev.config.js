import path from 'path';

const serverDevConfig = {
  output: {
    path: path.resolve(__dirname, '../../static'),
    filename: 'server.bundle.js',
    publicPath: '/'
  }
};

export default serverDevConfig;
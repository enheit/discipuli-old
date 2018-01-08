import path from 'path';

const devConfig = {
  output: {
    path: path.resolve(__dirname, '../static'),
    filename: 'browser.bundle.js'
  },
};

export default devConfig;

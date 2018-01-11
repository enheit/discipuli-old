import merge from 'webpack-merge';

import {
  browserCommonConfig,
  browserDevConfig,
  browserProdConfig,
} from './configs/browser-webpack';
import {
  serverCommonConfig,
  serverDevConfig,
  serverProdConfig
} from './configs/server-webpack';

const environments = {
  browser: 'browser',
  server: 'server'
};

const webpackConfig = env => {
  return createConfig(env);
};

const createConfig = (env) => {
  switch(env.NODE_ENV) {
    case environments.browser:
      return getBrowserConfig(env.production);
    case environments.server:
      return getServerConfig(env.production);
    default:
      throw new Error("There is no such environment");
  }
};

const getBrowserConfig = (isProduction) => {
  return isProduction
    ? merge(browserCommonConfig, browserProdConfig)
    : merge(browserCommonConfig, browserDevConfig);
}

const getServerConfig = (isProduction) => {
  return isProduction
    ? merge(serverCommonConfig, serverProdConfig)
    : merge(serverCommonConfig, serverDevConfig);
}

export default webpackConfig;
import merge from 'webpack-merge';

import { commonConfig, devConfig, prodConfig } from './configs';

const environments = {
  browser: 'browser',
  server: 'serve'
};

const webpackConfig = env => {
  return createConfig(env);
};

const createConfig = (env) => {
  switch(env.NODE_ENV) {
    case environments.browser:
      return getBrowserConfig(env.production);
    case environment.server:
      return null;
    default:
      throw new Error("There is no such environment");
  }
};

const getBrowserConfig = (isProduction) => {
  return isProduction
    ? merge(commonConfig, prodConfig)
    : merge(commonConfig, devConfig);
}

export default webpackConfig;
import { CustomWebpackBrowserSchema, TargetOptions } from '@angular-builders/custom-webpack';
import * as webpack from 'webpack';
 
export default (
  config: webpack.Configuration,
  options: CustomWebpackBrowserSchema,
  targetOptions: TargetOptions
) => {
  config.plugins.push(
    new webpack.DefinePlugin({
      APP_ENV: process.env.APP_ENV,
    })
  );
  return config;
};
/**
 * Author iWuzhi
 * Date 2019/7/9
 **/

const path = require('path');

module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.
  // Make whatever fine-grained changes you need
  config.module.rules.push( {
    test: /\.less$/,
    use: ['style-loader', 'css-loader', 'less-loader'],
    include: path.resolve(process.cwd(), 'src'),
  },);
  // Return the altered config
  return config;
};
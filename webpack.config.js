const webpack = require('webpack');
const dotenv = require('dotenv');
const env = dotenv.config().parsed;

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      APP_TITLE: JSON.stringify(env.APP_TITLE),
    }),
  ]
}

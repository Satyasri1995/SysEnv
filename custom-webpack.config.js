const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      $ENV: {
        Path: JSON.stringify(process.env.Path),
        TEMP: JSON.stringify(process.env.TEMP),
        TMP: JSON.stringify(process.env.TMP)
      }
    })
  ]
};

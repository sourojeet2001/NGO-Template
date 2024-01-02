const path = require('path');

module.exports =  {
  mode: "development",
  entry: "./src/motion.js",
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: "motionanimation.js",
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist/js'),
    compress:true,
    port: 5500
  }
}
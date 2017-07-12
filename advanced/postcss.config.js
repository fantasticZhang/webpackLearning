/*
 使用autoprefixer自动创建css的vendor prefixes
 autoprefixer是postcss的一个插件, 所以我们也要安装postcss的webpack loader.
 */

module.exports = {
  plugins: [
      require('autoprefixer')()
  ]
}

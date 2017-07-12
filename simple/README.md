
一个简单的单页应用，关于Webpack的简单介绍，参见我的博客：[Webpack入门学习](http://fantasticzhang.gtensor.com/2017/06/01/Webpack%E5%85%A5%E9%97%A8%E5%AD%A6%E4%B9%A0/)

目录结构：

        ├── dist                      打包输出目录, 只需部署这个目录到生产环境
        ├── package.json              项目配置信息
        ├── node_modules              npm安装的依赖包都在这里面
        ├── src                       源代码
        │   ├── index.html            入口html
        │   ├── index.js              入口js
        │   └── view                  页面放这里
        └── webpack.config.js         webpack 配置文件

运行：

    npm install
    npm run dev

该demo来自于教程[webpack 2 打包实战](https://github.com/fenivana/webpack-in-action/)，由于是我按照教程实现了一遍，所以可能和教程中的实例不完全一样。


Webpack的进阶学习，这里面涉及到的Webpack相关知识点，参见我的博客：[ Webpack进阶（一）](http://fantasticzhang.gtensor.com/2017/07/12/Webpack%E8%BF%9B%E9%98%B6%EF%BC%88%E4%B8%80%EF%BC%89/)

目录结构：

        ├── dist                                 打包输出目录, 只需部署这个目录到生产环境
        ├── package.json                         项目配置信息
        ├── config                               配置文件夹，里面是一些根据不同环境对webpack配置的文件
        ├── node_modules                         npm安装的依赖包都在这里面
        ├── src                                  源代码
        │   ├── index.html                       入口html
        │   ├── index.js、vendor.js              入口js
        │   └── view                             页面放这里
        └── webpack.config.js                    webpack 配置文件

运行：

    npm install
    npm run dev

`webpack.config.js`文件中有比较详细的注释。

该demo是参照[webpack 2 打包实战](https://github.com/fenivana/webpack-in-action/)教材实现的。虽然是照着教程敲了一遍代码，但是在运行时还是遇到了一些问题。例如，一开始总是提示我：`hookAnchorElements is not a function`。最后找到了原因：我安装的spa-history比教程中的版本要高，而这个版本中已经把这个方法去掉了= =。不过好在最后把所有问题都解决了，demo成功地运行了起来~

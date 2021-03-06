/**
 * Created by zjl on 2017/7/11.
 */
//引入全局对象
import g from './global'

//引入页面文件
import bar from './view/bar'
import foo from './view/foo'

const routes = {
    '/bar': bar,
    '/foo': foo
};

//Router类 用来控制页面根据当前URL切换
class Router{
    start(){
        // 点击浏览器后退/前进按钮时会触发window.onpopstate事件, 我们在这时切换到相应页面
        window.addEventListener('popstate',()=>{
            this.load(location.pathname);
        });
        // 打开页面时加载当前页面
        this.load(location.pathname);
    }

    //前往path，会变更地址栏的URL，并加载相应页面
    go(path){
        //变更地址栏的URL
        history.pushState({},'',path);
        //加载相应页面
        this.load(path);
    }
    //加载path路径的页面
    load(path){
       //创建相应的页面实例
        const view = new routes[path]();
        //调用页面方法，把页面加载到document.body中
        view.mount(document.body);
    }
}
// new一个路由对象, 赋值为g.router, 这样我们在其他js文件中可以引用到
g.router = new Router();
//启动
g.router.start();
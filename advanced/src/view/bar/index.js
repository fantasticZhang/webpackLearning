/**
 * Created by zjl on 2017/7/11.
 */

//引入HTML模板，会被作为字符串引入
import template from "./index.html"

//引入css，会生成<style>块插入到<head>头中
import "./style.css"

//导出类
export default class {
   mount(container){
       document.title = "bar";
       container.innerHTML = template
   }
}
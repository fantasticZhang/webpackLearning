/**
 * Created by zjl on 2017/7/11
 */

import template from "./index.html"

import "./style.css"

export default class {
    mount(container){
        document.title = "foo";
        container.innerHTML = template;
    }
}
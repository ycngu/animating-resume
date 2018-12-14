content = `/*
* 面试官你好，我是ycngu
* 接下来我将以动画的形式介绍自己
* 下面就是写代码的时间了
* 首先，我要准备一些样式
*/

* {
    transition: all 1s;
}
html {
    background: rgb(222,222,222);
    font-size: 16px;
    padding: 16px;
}
#code {
    border:1px solid blue;
}
`

var n = 0
var id = setInterval(() => {
   n+=1
   code.innerHTML = content.substring(0, n)
   code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css, 'css')
   styleTag.innerHTML = content.substring(0, n) 
   if(n >= content.length){
       clearInterval(id)
   }
}, 10)


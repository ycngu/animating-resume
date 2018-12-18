content = `/*
 *  面试官你好，我是ycngu
 *  接下来我将以动画的形式介绍自己
 *  下面就是写代码的时间了
 *  首先，我要准备一些样式
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
    border: 1px solid white;
    box-shadow: 0px 0px 10px #000000;
    padding: 10px;
}

/* 接下来我需要一点代码高亮 */

.token.comment{
    color: slategray;
}
.token.selector{
    color: #690;
} 
.token.property{
    color: #905;
}
.token.function{
    color: #DD4A68;
}
.token.punctuation{
    color: #999;
}
/* 好了，准备工作完成 */
/* 接下来正式写简历 */

/* 首先准备一张白纸 */
#code{
    display:inline-block;
    width:45%;
}

#paper {
    display:inline-block;
    background-color:white;
    width:50%;
    border:5px solid #444;
}

/* 现在请看右边 */
`

content2 = `

`

var n = 0
writeCode('#code', content, writeCode('#paper', content2, fn2))
// var id = setInterval(() => {
//     n += 1
//     code.innerHTML = content.substring(0, n)
//     code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css, 'css')
//     styleTag.innerHTML = content.substring(0, n)
//     code.scroll(0, 1000)
//     if (n >= content.length) {
//         clearInterval(id)
//         fn2()
//     }
// }, 10)

function fn2() {
    // setInterval(() => {
    //     n += 1
    //     code.innerHTML = content.substring(0, n)
    //     code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css, 'css')
    //     styleTag.innerHTML = content.substring(0, n)
    //     code.scroll(0, 1000)
    //     if (n >= content.length) {
    //         clearInterval(id)
    //         fn2()
    //     }
    // }, 10)
}

function writeCode(view, content, callback) {
    let n = 0
    let id = setInterval(() => {
        n += 1
        dom = document.querySelector(view)
        dom.innerHTML = content.substring(0, n)
        dom.innerHTML = Prism.highlight(dom.innerHTML, Prism.languages.css, 'css')
        styleTag.innerHTML = content.substring(0, n)
        dom.scroll(0, 1000)
        if (n >= content.length) {
            clearInterval(id)
            callback && callback.call()
        }
    }, 10)
}
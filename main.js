css1 = `/*
*  面试官你好，我是ycngu
*  接下来我将以动画的形式介绍自己
*  下面就是写代码的时间了
*  首先，我要准备一些样式
*/

* {
   transition: all 1s;
}
html {
   background: #DEDEDE;
   font-size: 16px;
   padding: 16px;
}
#code {
   border: 1px solid white;
   box-shadow: 0px 0px 10px #000000;
   padding: 10px;
}

/* 接下来我需要一点代码高亮 */
.token.selector {
   color: #690;
}
.token.property {
   color: #905;
}

/* 好了，准备工作完成 */
/* 接下来正式写简历 */

/* 首先准备一张白纸 */
#code {
   display: inline-block;
   width: 45%;
}

#paper {
   display: inline-block;
   background-color: white;
   width: 50%;
   padding: 10px;
   border: 5px solid #444;
}

/* 现在请看右边 */
`

css2 = `
/* 现在看起来有点丑 
 * 哦，我写的是markdown格式 
 * 现在我用markdown.js转换一下 
 */
`
css3 = `
/*
 * 希望您喜欢这个会动的简历
 * 谢谢观看
 */
`

md = `
# 自我介绍

我叫ycngu 1996年出生，在xxx学校毕业 自学前端半年，希望应聘前端开发岗位

- 2xxx ~ 2xxx xxx大学
- 2xxx ~ 2xxx xxx公司任职
- 2xxx ~ 2xxx xxx公司任职

# 技能介绍

熟练掌握以下技能
gst
- javascript
- jQuery
- CSS
- xxx

# 项目介绍
1. canvas画板
2. 无缝轮播
3. 导航网页

# 联系方式
- 微信: xxxxx
- Email：xxxxx
- 手机：xxxxx
`

var n = 0
writeCss('', css1, () => {
    writePaper('#paper', md, () => {
        writeCss(css1, css2, () => {
            convertMarkdownToHtml(() => {
                writeCss(css1 + css2, css3)
            })
        })
    })
})



function writePaper(view, content, callback) {
    let n = 0
    let id = setInterval(() => {
        n += 1
        dom = document.querySelector(view)
        dom.innerHTML = content.substring(0, n)
        dom.scroll(0, 1000)
        if (n >= content.length) {
            clearInterval(id)
            console.log('writePaper')
            callback && callback.call()
        }
    }, 40)
}

function writeCss(prefix, content, callback) {
    let n = 0
    console.log(prefix)
    let id = setInterval(() => {
        n += 1
        dom = document.querySelector('#code')
        dom.innerHTML = content.substring(0, n)
        dom.innerHTML = Prism.highlight(prefix + dom.innerHTML, Prism.languages.css, 'css')
        styleTag.innerHTML = prefix + content.substring(0, n)
        dom.scroll(0, 1000)
        if (n >= content.length) {
            clearInterval(id)
            console.log('writeCode')
            callback && callback.call()
        }
    }, 65)
}

function convertMarkdownToHtml(fn) {
    let div = document.createElement('div')
    div.className = 'html markdown-body'
    div.id = 'paper'
    let tempMd = markdown.toHTML(md)
    div.innerHTML = tempMd
    let paper = document.querySelector('#paper')
    paper.replaceWith(div)
    fn && fn.call()
}
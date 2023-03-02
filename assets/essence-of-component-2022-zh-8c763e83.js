import{u as a,c,w as t,_ as p,o as r,a as s,b as n}from"./app-e02a7697.js";const i=s("div",{class:"prose m-auto"},[s("p",null,[s("div",{class:"table-of-contents"},[s("ul",null,[s("li",null,[s("a",{href:"#组件的产出是什么"},"组件的产出是什么 ")]),s("li",null,[s("a",{href:"#组件的-vnode-如何表示"},"组件的 VNode 如何表示 ")]),s("li",null,[s("a",{href:"#组件的种类"},"组件的种类 ")])])])]),s("blockquote",null,[s("p",null,[s("a",{href:"https://github.com/leaon4/mini-vue",target:"_blank",rel:"noopener"},"Github")]),s("p",null,[n("回放: "),s("a",{href:"https://space.bilibili.com/563331171",target:"_blank",rel:"noopener"},"哔哩哔哩")])]),s("hr"),s("h2",{id:"组件的产出是什么",tabindex:"-1"},[n("组件的产出是什么 "),s("a",{class:"header-anchor",href:"#组件的产出是什么","aria-hidden":"true"},"#")]),s("p",null,[n("在 "),s("strong",null,"JQuery"),n(" 盛行的年代，比起组件，"),s("code",null,"模板引擎"),n("的概念要更加流行。我们可以使用 "),s("code",null,"lodash.template"),n(" 函数来回忆一下当年是如何用模板开发一个页面的：")]),s("pre",null,[s("code",{class:"language-html"},[s("div",{class:"shiki-container"},[s("pre",{class:"shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"import { template } from 'lodash'")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"const compiler = template('"),s("span",{style:{color:"#666666"}},"<"),s("span",{style:{color:"#4D9375"}},"h1"),s("span",{style:{color:"#666666"}},">"),s("span",{style:{color:"#FDAEB7"}},"<"),s("span",{style:{color:"#DBD7CAEE"}},"%= title %>"),s("span",{style:{color:"#666666"}},"</"),s("span",{style:{color:"#4D9375"}},"h1"),s("span",{style:{color:"#666666"}},">"),s("span",{style:{color:"#DBD7CAEE"}},"')")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"const html = compiler({ title: 'My Component' })")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"document.getElementById('app').innerHTML = html")]),n(`
`),s("span",{class:"line"})])]),s("pre",{class:"shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"import { template } from 'lodash'")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"const compiler = template('"),s("span",{style:{color:"#999999"}},"<"),s("span",{style:{color:"#1E754F"}},"h1"),s("span",{style:{color:"#999999"}},">"),s("span",{style:{color:"#B31D28"}},"<"),s("span",{style:{color:"#393A34"}},"%= title %>"),s("span",{style:{color:"#999999"}},"</"),s("span",{style:{color:"#1E754F"}},"h1"),s("span",{style:{color:"#999999"}},">"),s("span",{style:{color:"#393A34"}},"')")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"const html = compiler({ title: 'My Component' })")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"document.getElementById('app').innerHTML = html")]),n(`
`),s("span",{class:"line"})])])])])]),s("pre",null,[s("code",{class:"language-txt"},[s("div",{class:"shiki-container"},[s("pre",{class:"shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#dbd7caee"}},"模板引擎的概念是：字符串 + 数据 => html。")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#dbd7caee"}})])])]),s("pre",{class:"shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#393a34"}},"模板引擎的概念是：字符串 + 数据 => html。")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393a34"}})])])])])])]),s("p",null,"lodash.template 函数虽然称不上是“引擎”，但足以说明问题。我们将模板字符串传递给 template 函数，该函数返回一个编译器 compiler，只要把数据传入 compiler 函数，便能得到最终想要渲染的内容。当数据发生变化时，我们需要使用新的数据重新编译模板："),s("pre",null,[s("code",{class:"language-html"},[s("div",{class:"shiki-container"},[s("pre",{class:"shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"const newHtml = compiler({ title: 'New Component' })")]),n(`
`),s("span",{class:"line"})])]),s("pre",{class:"shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"const newHtml = compiler({ title: 'New Component' })")]),n(`
`),s("span",{class:"line"})])])])])]),s("p",null,"如果把上面的逻辑封装成一个函数，那么一个组件就诞生了："),s("pre",null,[s("code",{class:"language-html"},[s("div",{class:"shiki-container"},[s("pre",{class:"shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"const MyComponent = props => {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  const compiler = MyComponent.cache || (MyComponent.cache = template('"),s("span",{style:{color:"#666666"}},"<"),s("span",{style:{color:"#4D9375"}},"h1"),s("span",{style:{color:"#666666"}},">"),s("span",{style:{color:"#FDAEB7"}},"<"),s("span",{style:{color:"#DBD7CAEE"}},"%= title %>"),s("span",{style:{color:"#666666"}},"</"),s("span",{style:{color:"#4D9375"}},"h1"),s("span",{style:{color:"#666666"}},">"),s("span",{style:{color:"#DBD7CAEE"}},"'))")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  return compiler(props)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"MyComponent.cache = null")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"document.getElementById('app').innerHTML = MyComponent({ title: 'MyComponent' })")]),n(`
`),s("span",{class:"line"})])]),s("pre",{class:"shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"const MyComponent = props => {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  const compiler = MyComponent.cache || (MyComponent.cache = template('"),s("span",{style:{color:"#999999"}},"<"),s("span",{style:{color:"#1E754F"}},"h1"),s("span",{style:{color:"#999999"}},">"),s("span",{style:{color:"#B31D28"}},"<"),s("span",{style:{color:"#393A34"}},"%= title %>"),s("span",{style:{color:"#999999"}},"</"),s("span",{style:{color:"#1E754F"}},"h1"),s("span",{style:{color:"#999999"}},">"),s("span",{style:{color:"#393A34"}},"'))")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  return compiler(props)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"MyComponent.cache = null")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"document.getElementById('app').innerHTML = MyComponent({ title: 'MyComponent' })")]),n(`
`),s("span",{class:"line"})])])])])]),s("p",null,[s("strong",null,"MyComponent"),n(" 组件也许会带给你这样的感觉：一个组件就是一个函数，给我什么样的数据，我就渲染对应的 html 内容。"),s("strong",null,"这，就是组件的本质"),n("。而如今的 Vue 或 React，它们的组件所产出的内容并不是 html 字符串，而是大家所熟知的 "),s("strong",null,"Virtual DOM"),n("。")]),s("p",null,[n("拿 Vue 来说，一个组件最核心的东西是 "),s("code",null,"render"),n(" 函数，剩余的其他内容，如 "),s("code",null,"data"),n("、"),s("code",null,"compouted"),n("、"),s("code",null,"props"),n(" 等都是为 render 函数提供数据来源服务的。render 函数本可以直接产出 html 字符串，但却产出了 Virtual DOM，借助 "),s("code",null,"snabbdom"),n(" 的 API 我们可以很容易地用代码描述这个过程：")]),s("pre",null,[s("code",{class:"language-html"},[s("div",{class:"shiki-container"},[s("pre",{class:"shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"import { h } from 'snabbdom'")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"// h 函数用来创建 VNode，组件的产出是 VNode")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"const MyComponent = props => {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  return h('h1', props.title)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"}")]),n(`
`),s("span",{class:"line"})])]),s("pre",{class:"shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"import { h } from 'snabbdom'")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"// h 函数用来创建 VNode，组件的产出是 VNode")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"const MyComponent = props => {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  return h('h1', props.title)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"}")]),n(`
`),s("span",{class:"line"})])])])])]),s("p",null,[n("Virtual DOM 终究要渲染真实 DOM，这个过程就可以理解为模板引擎年代的完全替换 html，只不过它采用的不是完全替换，我们通常把这个过程叫做 "),s("strong",null,"patch"),n("，同样可以借助 "),s("code",null,"snabbdom"),n(" 的 API 轻松地实现：")]),s("pre",null,[s("code",{class:"language-html"},[s("div",{class:"shiki-container"},[s("pre",{class:"shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"import { h, init } from 'snabbdom'")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"// init 方法用来创建 patch 函数")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"const patch = init([])")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"const MyComponent = props => {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  return h('h1', props.title)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"}")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"// 组件的产出是 VNode")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"const prevVnode = MyComponent({ title: 'prev' })")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"// 将 VNode 渲染成真实 DOM")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"patch(document.getElementById('app'), prevVnode)")]),n(`
`),s("span",{class:"line"})])]),s("pre",{class:"shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"import { h, init } from 'snabbdom'")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"// init 方法用来创建 patch 函数")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"const patch = init([])")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"const MyComponent = props => {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  return h('h1', props.title)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"}")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"// 组件的产出是 VNode")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"const prevVnode = MyComponent({ title: 'prev' })")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"// 将 VNode 渲染成真实 DOM")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"patch(document.getElementById('app'), prevVnode)")]),n(`
`),s("span",{class:"line"})])])])])]),s("p",null,"当数据变更时，组件会产出新的 VNode，我们只需再次调用 patch 函数即可。"),s("pre",null,[s("code",{class:"language-txt"},[s("div",{class:"shiki-container"},[s("pre",{class:"shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#dbd7caee"}},"组件的产出就是 Virtual DOM")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#dbd7caee"}})])])]),s("pre",{class:"shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#393a34"}},"组件的产出就是 Virtual DOM")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393a34"}})])])])])])]),s("h2",{id:"组件的-vnode-如何表示",tabindex:"-1"},[n("组件的 VNode 如何表示 "),s("a",{class:"header-anchor",href:"#组件的-vnode-如何表示","aria-hidden":"true"},"#")]),s("p",null,[s("strong",null,"VNode"),n(" 是真实 DOM 的描述，比如我们可以用如下对象描述一个 "),s("code",null,"div"),n(" 标签：")]),s("pre",null,[s("code",{class:"language-html"},[s("div",{class:"shiki-container"},[s("pre",{class:"shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"const elementVnode = {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  tag: 'div'")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"}")]),n(`
`),s("span",{class:"line"})])]),s("pre",{class:"shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"const elementVnode = {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  tag: 'div'")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"}")]),n(`
`),s("span",{class:"line"})])])])])]),s("p",null,[n("想要把 elementVnode 渲染成真实 DOM，我们还需要一个渲染器("),s("strong",null,"Renderer"),n(")：")]),s("pre",null,[s("code",{class:"language-html"},[s("div",{class:"shiki-container"},[s("pre",{class:"shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"function render(vnode, container) {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  mountElement(vnode, container)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"}")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"function mountElement(vnode, container) {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  // 创建元素")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  const el = document.createElement(vnode.tag)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  // 将元素添加到容器")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  container.appendChild(el)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"}")]),n(`
`),s("span",{class:"line"})])]),s("pre",{class:"shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"function render(vnode, container) {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  mountElement(vnode, container)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"}")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"function mountElement(vnode, container) {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  // 创建元素")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  const el = document.createElement(vnode.tag)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  // 将元素添加到容器")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  container.appendChild(el)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"}")]),n(`
`),s("span",{class:"line"})])])])])]),s("p",null,[n("渲染器接收两个参数，分别是将要渲染的 vnode 和 元素挂载点(真实 DOM 被渲染的位置)。在 render 函数内调用了 "),s("code",null,"mountElement"),n("，它的作用是根据 VNode 创建真实 DOM 并将其添加到容器中。为了渲染如上的 div 标签，我们可以这样调用 render 函数：")]),s("pre",null,[s("code",{class:"language-html"},[s("div",{class:"shiki-container"},[s("pre",{class:"shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"// 把 elementVnode 渲染到 id 为 app 的元素下")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"render(elementVnode, document.getElementById('app'))")]),n(`
`),s("span",{class:"line"})])]),s("pre",{class:"shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"// 把 elementVnode 渲染到 id 为 app 的元素下")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"render(elementVnode, document.getElementById('app'))")]),n(`
`),s("span",{class:"line"})])])])])]),s("p",null,[n("为了能够渲染组件，我们需要思考：组件的 VNode 应该如何表示？对于 html 标签的 VNode 来说，其 tag 属性的值就是标签的名字，但如果是组件的话，其 VNode 中 "),s("code",null,"tag"),n(" 属性的值应该是什么呢？很简单，我们可以将其指向组件自身。假设我们有如下组件：")]),s("pre",null,[s("code",{class:"language-html"},[s("div",{class:"shiki-container"},[s("pre",{class:"shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"class MyComponent {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  render() {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    // render 函数产出 VNode")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    return {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"      tag: 'div'")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    }")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  }")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"}")]),n(`
`),s("span",{class:"line"})])]),s("pre",{class:"shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"class MyComponent {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  render() {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    // render 函数产出 VNode")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    return {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      tag: 'div'")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    }")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  }")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"}")]),n(`
`),s("span",{class:"line"})])])])])]),s("p",null,"如上，我们使用 class 定义了一个类，它是一个组件(有状态组件)，我们可以使用如下 VNode 来描述它："),s("pre",null,[s("code",{class:"language-html"},[s("div",{class:"shiki-container"},[s("pre",{class:"shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"const componentVnode = {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  tag: MyComponent")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"}")]),n(`
`),s("span",{class:"line"})])]),s("pre",{class:"shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"const componentVnode = {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  tag: MyComponent")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"}")]),n(`
`),s("span",{class:"line"})])])])])]),s("p",null,"如上，直接将 tag 属性的值指向组件自身。但想要正确地渲染该组件，我们还需要修改 render："),s("pre",null,[s("code",{class:"language-html"},[s("div",{class:"shiki-container"},[s("pre",{class:"shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"function render(vnode, container) {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  if (typeof vnode.tag === 'string') {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    // html 标签")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    mountElement(vnode, container)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  } else {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    // 组件")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    mountComponent(vnode, container)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  }")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"}")]),n(`
`),s("span",{class:"line"})])]),s("pre",{class:"shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"function render(vnode, container) {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  if (typeof vnode.tag === 'string') {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    // html 标签")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    mountElement(vnode, container)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  } else {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    // 组件")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    mountComponent(vnode, container)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  }")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"}")]),n(`
`),s("span",{class:"line"})])])])])]),s("p",null,[n("如上，通过 判断 "),s("code",null,"vnode.tag"),n(" 是否是字符串 来区分：一个 VNode 到底是 html 标签还是组件。如果是组件的话，调用 "),s("code",null,"mountComponent"),n(" 函数挂载组件，而非 mountElement，如下是 mountComponent 函数的实现：")]),s("pre",null,[s("code",{class:"language-html"},[s("div",{class:"shiki-container"},[s("pre",{class:"shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"function mountComponent(vnode, container) {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  // 创建组件实例")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  const instance = new vnode.tag()")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  // 渲染")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  instance.$vnode = instance.render()")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  // 挂载")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  mountElement(instance.$vnode, container)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"}")]),n(`
`),s("span",{class:"line"})])]),s("pre",{class:"shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"function mountComponent(vnode, container) {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  // 创建组件实例")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  const instance = new vnode.tag()")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  // 渲染")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  instance.$vnode = instance.render()")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  // 挂载")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  mountElement(instance.$vnode, container)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"}")]),n(`
`),s("span",{class:"line"})])])])])]),s("p",null,[n("由于 vnode.tag 指向组件类，所以我们创建一个组件实例，接着调用其 render 函数产出 VNode 并将其添加到实例属性 "),s("code",null,"instance.$vnode"),n("，最后借用 "),s("code",null,"mountElement"),n(" 函数完成标签的挂载即可。")]),s("h2",{id:"组件的种类",tabindex:"-1"},[n("组件的种类 "),s("a",{class:"header-anchor",href:"#组件的种类","aria-hidden":"true"},"#")]),s("ul",null,[s("li",null,"第一种方式是使用一个普通的函数：")]),s("pre",null,[s("code",{class:"language-html"},[s("div",{class:"shiki-container"},[s("pre",{class:"shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"function MyComponent(props) {}")]),n(`
`),s("span",{class:"line"})])]),s("pre",{class:"shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"function MyComponent(props) {}")]),n(`
`),s("span",{class:"line"})])])])])]),s("ul",null,[s("li",null,"第二种方式是使用一个类：")]),s("pre",null,[s("code",{class:"language-html"},[s("div",{class:"shiki-container"},[s("pre",{class:"shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"class MyComponent {}")]),n(`
`),s("span",{class:"line"})])]),s("pre",{class:"shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"class MyComponent {}")]),n(`
`),s("span",{class:"line"})])])])])]),s("p",null,"分别代表两类组件：函数式组件(Functional component) 和 有状态组件(Stateful component)。它们的区别如下："),s("ul",null,[s("li",null,[n("函数式组件： "),s("ul",null,[s("li",null,"是一个纯函数;"),s("li",null,"没有自身状态，只接收外部数据;"),s("li",null,"产出 VNode 的方式：单纯的函数调用;")])]),s("li",null,[n("有状态组件: "),s("ul",null,[s("li",null,"是一个类，可实例化;"),s("li",null,"可以有自身状态;"),s("li",null,"产出 VNode 的方式：需要实例化，然后调用其 render 函数。")])])])],-1),E="组件的本质 2022",D="组件的本质 2022",A="2022-08-20T00:00:00.000Z",f="zh",k="project",g=!0,C="3days",v=[{property:"og:title",content:"组件的本质 2022"},{property:"og:description",content:"组件的本质 2022"},{name:"description",content:"组件的本质 2022"}],B={__name:"essence-of-component-2022-zh",setup(d,{expose:e}){const l={title:"组件的本质 2022",description:"组件的本质 2022",date:"2022-08-20T00:00:00.000Z",lang:"zh",type:"project",recording:!0,duration:"3days",meta:[{property:"og:title",content:"组件的本质 2022"},{property:"og:description",content:"组件的本质 2022"},{name:"description",content:"组件的本质 2022"}]};return e({frontmatter:l}),a({title:"组件的本质 2022",meta:[{property:"og:title",content:"组件的本质 2022"},{property:"og:description",content:"组件的本质 2022"},{name:"description",content:"组件的本质 2022"}]}),(u,h)=>{const o=p;return r(),c(o,{frontmatter:l},{default:t(()=>[i]),_:1})}}};export{A as date,B as default,D as description,C as duration,f as lang,v as meta,g as recording,E as title,k as type};

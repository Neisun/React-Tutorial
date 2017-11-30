## react.js demo03

demo03中

```js
var arr = [<h1>标题1</h1>,<h2>标题2<h2/>];
ReactDOM.render(
    <div>
    {arr}
    <div/>,
    document.getElementById('target')
)
```
我们可以直接定义一个含有标签的arr，注意不是字符串形式，不然不然会按照字符串形式解析。
然后能直接用`jsx`语法渲染出我们写的标签。
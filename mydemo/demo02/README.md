## react demo02

```js
var names = [
    {name:'小明'},
    {name:'小红'},
    {name:'小刚'},
]
ReactDOM.render(
    <div>
    {
        // 这里处理数据
        names.map((item) => {
            return <li>Hello,{item.name}</li>;
        })
    }
    </div>,
    document.getElementById('target')
)
```
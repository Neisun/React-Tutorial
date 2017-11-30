## react.js-demo08

知识点，state

有的时候创建的一个组件，会有一个初始的状态值

在阮一峰的例子中，我们使用
```js
React.createClass({
    // 设置属性的初始值
    getInitialState:function () {
        return 
    },
    render:function () {
        return 
    }
})
```
> 改变state里的值

必须用`setState`，来改变state中的值。因为，出触发视图的更新。

不能直接`this.state.value`去改变
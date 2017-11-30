## react.js-demo

```js
<script type="text/babel">
    var Hello = React.createClass({
        render:function () {
            return <h1>Hello,{this.props.name}</h1>
        }
    });
    ReactDOM.render(
        <Hello name="Neisun" />,
        document.getElementById('target')
    )
</script>
```
自定义组件语法
1. `React.createClass({})`，所有的组件类必须有一个render函数，用于输出组件。
1. 定义的组件名称第一个字母必须大写
1. render函数中return语句后必须有一个根元素，与vue语法非常类似，又或者说vue借鉴了react
1. 使用组件时候，可以当成单标签也可以当成双标签元素，而且写在组件中的属性，在组件中可以通过`this.props.attr`获取
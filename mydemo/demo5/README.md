## react.js demo05

紧接着上一篇，创建了一个可复用的组件

在组件中，我们可以随便定义任何属性名称，并且可以通过`this.props.attr`来获取。但是有一个属性，类似于关键字，不能这么定义。那就是`this.props.children`，这个是用来获取组件内部的元素节点。

```js
<script type="text/babel">
    var NodeList = React.createClass({
        render:function () {
            return ( // 当内容比较多的时候，我们可以用()包裹
                <ol>
                {
                    React.Children.map(this.props.children,(item) => {
                        return <li>{item}</li>;
                    })
                }
                </ol>
            );
        }
    });
    ReactDOM.render(
        <NodeList>
            <span>hello</span>
            <span>world</span>
        </NodeList>,
        document.body
    )
</script>
```

如同例子中，NodeList中我们有两个span标签，这两个span标签就是NodeList组件的子节点

在组件中，我们可以`React.Children.map(this.props.children,(child) => {...})`
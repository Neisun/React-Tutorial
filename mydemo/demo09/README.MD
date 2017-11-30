## react.js-demo09

知识点，表单

这个例子是一个简单的数据绑定的例子，与vue的v-model十分类似。

```js
<script type="text/babel">
    // 用react处理表单，实现数据绑定
    var Input = React.createClass({
        getInitialState:function () {
            return {
                value:""
            }
        },
        // 核心事件，监听change事件，然后setState
        handleChange:function (e) {
            this.setState({
                value:e.target.value
            })
        },
        render:function () {
            var inputValue = this.state.value;
            return (
                <div>
                    <input type="text" value={inputValue} onChange={this.handleChange} />
                    <p>{inputValue}</p>
                </div>
            );
        }
    })
    ReactDOM.render(
        <Input />,
        document.body
    )
    
</script>
```
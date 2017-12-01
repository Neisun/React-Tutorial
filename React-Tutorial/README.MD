## react中文版教程

这里记录着，react中文教程的案例与写法

希望会帮助到你，学习react

教程中并没有使用自动化构建工具，只是通过引入，react.js,react-dmo,browser.js文件来进行学习

所以，我们做一个约定
+ 我们的每个html文件都必须引入这些文件
+ 然后我们的script需要写`type="text/babel"`，方便browser.min.js中babel语法进行编译解析

好了，让我们开始进行案例的学习吧。学习新东西，是每个程序员最开心的时刻！

### hello,react!

我们来看一下，react的第一个例子

> ReactDOM.render(element,root)

```js
ReactDOM.render(<h1>Hello,react!</h1>,document.getElementById('root'));
// 当然，你可以把html标签提取出来
const element = <h1>Hello,react!</h1>;
ReactDOM.render(element,document.getElementById('root'));
```
在页面中就可以渲染出来了。

### 独创的jsx语法

React.js的开发人员，脑洞大开，创造的这种语法，很棒。可以将js表达式和html混入。非常棒！

>最简洁的写法

```js
const element1 = <h1>hello,world!</h1>;
```
要知道，这种写法，在原生js中，只能通过字符串拼接。

>如果标签有很多，怎么办？

```js
const element2 = (
    <div>
        <p>this is a paragraph!</p>
        <span>this is a span!</span>
    </div>
)
```
**可以用()将标签包裹起来。**

>可以把js表达式以{}形式嵌入到html中

```js
// 格式化姓名的函数
function formatName(user) {
    return user.firstName+' '+user.lastName;
}
const user = {
    firstName:'David',
    lastName:'Beckham'
}
// 可以在html中直接{js}，{}会被解析为js表达式
const element3 = (
    <div>
        Hello,{formatName(user)}!
    </div>
)
```
**jsx会把{}当做js表达式解析，<>会被当成html解析。**

>想指定属性？这很容易，属性用""包裹的就是字符串。不想这个属性是字符串？也很容易的。

```js
var user = {
    userId:10010
}
const element4 = <div name="Neisun" user={name}></div>
```
### 渲染元素

以时钟为例子。

```js
// 以时钟的demo看一下渲染一个元素
function tick() {
    const element = (
        <p>Time is {new Date().toLocaleTimeString()}</p>
    );
    ReactDOM.render(element,document.getElementById('root'))
}
setInterval(tick,1000);
// 这种方式每个一秒调用一个render函数，其实非常浪费性能。正常情况下应该调用一次render函数，其他的内容都在组件内完成
```

### 灵活的组件

能独立出来的组件是react非常棒的一个地方。要知道在开发过程中，有一些业务模块复用性是非常高的。独立出来的组件，可以提供我们重复使用。

>最简单的组件（不包含状态值），我们使用函数来构造最便捷

```js
//函数式组件
function Welcome(props) {
    return <h1>Hello,{props.name}</h1>
};
ReactDOM.render(<Welcome name="Neisun" />,document.getElementById('root'));
// 或者，我们这么写也是可以的
const element = <Welcome name="Neisun" />;
ReactDOM.render(element,document.getElementById('root'));
```
>组件的嵌套，官方术语，构成组件（特别垃圾的翻译）

```js
function App() {
    return (
        <div>
            <Welcome name="David" />
            <Welcome name="John" />
            <Welcome name="Joe" />
        </div>
    )
}
ReactDOM.render(<App />,document.getElementById('root'));
```
>提取组件

我们创建一个用户评论组件。其中包含，用户的头像，用户名，用户评论内容，评论日期。

我们先来看一下数据结构，根据数据结构，我们创建我们的组件。

```js
const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64'
    }
};
```
数据结构分三部分，date部分，text部分，author部分；

所以我们的结构就跟着这个来；

```js
function Comment(props) {
    return (
        <div className="comment">
            <div className="userInfo">
                <img className="avatar" 
                    src={props.author.avatarUrl} 
                    alt={props.author.name} />
                <div className="userInfo-name">
                    {props.author.name}
                </div>
            </div>
            <div className="comment-text">
                {props.text}
            </div>
            <div className="comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    )
};
// 然后把格式化日期的功能提取出来
function formatDate(date) {
    return date.toLocaleDateString();
};
// 给组件传递了三个属性，author，text，date
ReactDOM.render(
    <Comment 
        author={comment.author}
        text={comment.text}
        date={comment.date}
    />,
    document.getElementById('root')   
)
```
这样就是比较基本的组件了，但是还有不完美的地方。我们可以把组件更细致的划分，提取出用户头像部分。

```js
// 对头像部分剖离出来，单独形成一个组件
function Avatar(props) {
    return (
        <img className="avatar" 
            src={props.author.avatarUrl} 
            alt={props.author.name} 
        />
    )
};
// 然后Comment组件的形式就变为
function Comment(props) {
    return (
        <div className="comment">
            <div className="userInfo">
                <Avatar author={props.author}>
                <div className="userInfo-name">
                    {props.author.name}
                </div>
            </div>
            <div className="comment-text">
                {props.text}
            </div>
            <div className="comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    )
};
```
还可以进一步的划分，将user部分（包含头像与用户名部分）

```js
function UserInfo(props) {
    return (
        <div className="userInfo">
                <Avatar author={props.author} />
                <div className="userInfo-name">
                    {props.author.name}
                </div>
            </div>
    )
}
// 于是，Commet组件还能进一步变形
function Comment(props) {
    return (
        <div className="comment">
            <UserInfo author={props.author} />
            <div className="comment-text">
                {props.text}
            </div>
            <div className="comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    )
};
```
最终的形式

```js
// 我们推荐更细致的划分组件，因为这样可以提高复用性
const comment = {
        date: new Date(),
        text: 'I hope you enjoy learning React!',
        author: {
            name: 'Hello Kitty',
            avatarUrl: 'http://placekitten.com/g/64/64'
        }
    };
function Comment(props) {
    return (
        <div className="comment">
            <UserInfo author={props.author} />
            <div className="comment-text">
                {props.text}
            </div>
            <div className="comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    )
};
// 我们也应该把格式化时间的方法提取出来
function formatDate(date) {
    return date.toLocaleDateString();
}
// Avatar组件
function Avatar(props) {
    return (
        <img className="avatar" 
            src={props.author.avatarUrl} 
            alt={props.author.name} 
        />
    )
};
// 然后再把用户信息那部分独立出来
function UserInfo(props) {
    return (
        <div className="userInfo">
                <Avatar author={props.author} />
                <div className="userInfo-name">
                    {props.author.name}
                </div>
            </div>
    )
}
// 这样的组件，更棒，也可以复用
ReactDOM.render(
    <Comment 
        author={comment.author}
        text={comment.text}
        date={comment.date}
    />,
    document.getElementById('root')   
)
```
**有几点需要引起注意的地方**
- 使用函数定义的组件，是最简洁的组件形式，组件没有状态值。
- 定义组件，首字母必须大写。
- 使用组件，像html标签那样使用，可以是单标签形式，可以是闭合标签的形式。
- 组件的属性是不可更改的，你定义的props是只读的。

### 状态(state)与生命周期

看上去很难懂和高大上的词语，背后都是简单的原理。其实非常容易理解的。我们上一节提到的组件，都是可复用的组件，但是组件不是一成不变的，而是处于一种动态的状态。而且，组件的属性是不可变更的东西，那么就需要有一种东西，能提供给他可变。这个东西就叫做状态。

回头想想，时钟的demo。那个案例的缺陷在于，每隔一秒我们都会利用`ReactDOM.render`函数来渲染一次组件。真的需要这么做么？浏览器解析DOM是非常消耗性能和浪费时间的，那么我们可以把每次时间的改变放在组件内完成，我们只需要渲染一次内容不就可以了么。这可以实现么？

当然，借助于`React.Component`来定义一个组件，然后设置state可以完成组件有自己的状态值。

```js
// ES6 class的写法继承React.Component
class Clock extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            time:new Date()
        }
    }
    render () {
        return (
            <div>{this.state.time.toLocaleTimeString()}</div>
        )
    }
    tick () {
        this.setState({
            time:new Date()
        })
    }
    componentDidMount() {
        // 讨厌的this指向问题，你可以用箭头函数解决，也可以直接bind
        this.timer = setInterval(this.tick.bind(this),1000);
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }
}
ReactDOM.render(<Clock />,document.getElementById('root'));
```
看来学习React的成本也不是很低呢，最起码你需要了解一下ES6的class写法，哈哈。

上个例子中写了两个生命周期的函数，`componentDidMount`与`componentWillUnmount`，根据字面意思就完全可以理解意思。

到底有几个生命周期的函数？
- componentWillMount()
- componentDidMount()
- componentWillUpdate(object nextProps, object nextState)
- componentDidUpdate(object prevProps, object prevState)
- componentWillUnmount()

暂时先记着，记不住没关系。要么多敲代码，多使用是最好的老师。还有一种方式，就是当字典一样，用的时候我们来查一下。

还有几点需要说明的，是关于state的。

>setState

- 我们更新状态值，需要使用`setState({})`，不然数据不会更新！！！
- 异步操作时候，可以向`setState`传递一个函数
```js
setState((preState,props) => ({
    // ...
}))
```
- 多个state怎么办，我们单独处理各自的state就行啦
```js
constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: []
};
componentDidMount() {
    fetchPosts().then(response => {
      this.setState({
        posts: response.posts
      });
    });

    fetchComments().then(response => {
      this.setState({
        comments: response.comments
      });
    });
}
```
上边时钟的demo，我们还可以用React.createClass这种方式，来处理。其实，我更喜欢这种写法，但是React的发展趋势是使用ES6 class，不过在这里把代码展示出来。

```js
const MyClock = React.createClass({
    getInitialState:function () {
        return {
            time:new Date()
        }
    },
    render:function () {
        return (
            <div>
                现在的时间是：{this.state.time.toLocaleTimeString()}
            </div>
        )
    },
    tick:function () {
        this.setState({
            time:new Date()
        })
    },
    componentDidMount:function () {
        this.timer = setInterval(this.tick,1000);
    },
    componentWillUnmount:function () {
        clearInterval(timer)
    }
})
ReactDOM.render(<MyClock />,document.getElementById('target'))
```
### 事件

注意事项
- 在react中定义事件，是驼峰的写法
- 使用事件是jsx语法，不是以字符串形式。而是{handleClick}形式
- 还有一个注意事项，this指向的问题

一个toggle的demo

```js
class MyButton extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isOk:false
        }
        // 你可以在这里，把回调函数的this指向改一下
        this.handleClick = this.handleClick.bind(this)
        // 也可以直接在使用事件的位置，直接this.handleClick.bind(this)
    }
    render() {
        return (
            <div>
                // 或者在这里this.handleClick.bind(this)，此处当做注释用，注释方式有问题
                <button type="button" onClick={this.handleClick} >{this.state.isOk?'ok':'bad'}</button>
            </div>
        )
    }
    handleClick() {
        this.setState(preState => ({
            isOk:!preState.isOk
        }))
    }
}
ReactDOM.render(<MyButton />,document.getElementById('root'))
```
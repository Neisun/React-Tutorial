## react.js-demo10

> 知识点

在react中，组件有时候数据是动态的，又有可能组件本身就是动态的

react给组件大体上设计了三个生命周期

1. componentWillMount()
1. componentDidMount()
1. componentWillUpdate(object nextProps, object nextState)
1. componentDidUpdate(object prevProps, object prevState)
1. componentWillUnmount()
1. componentWillReceiveProps(object nextProps)：已加载组件收到新的参数时调用
1. shouldComponentUpdate(object nextProps, object nextState)：组件判断是否重新渲染时调用

在react中style应该写成一个对象的形式

style={{...}},第一个{}是jsx语法，第二个{}是对象





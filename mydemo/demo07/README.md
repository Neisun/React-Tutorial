## react.js-demo07

知识点，如何获取真实的DOM节点
可以给标签设置ref属性，然后通过this.refs.refName（设置的refName）来获取到DOM节点

> 创建组件的方法

在阮一峰的教程中大部分使用的都是React.createClass({})来设置。但是现在教程不是很推荐，这种写法。个人感觉这种写法还是非常全面的，现在的教程推崇使用ES6 class写法。简单的组件，直接用简单的函数去写。
// 这是antd-init客户端搭建的最简单的用于演示使用的demo，实际项目开发不能用这个，因为功能太少。
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { DatePicker } from 'antd';

function App() {
  return (
    <div style={{ margin: 100 }}>
      <h1>AntDesign Demo</h1>
      <hr /><br />
      <DatePicker />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

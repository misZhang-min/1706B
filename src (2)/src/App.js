import React from 'react';
// 创建组件
import FunModule from './component/addModule/index'
// tab切换
import Tab from './component/tab/tab'
// todolist
import Todo from './component/todolist/todo'
function App() {
  return (
    <div className="App">
      <Todo />
    </div>
  );
}

export default App;

import React from 'react';


/* 
react版本在16.8以前 函数组件和类组件的区别
                          函数组件        类组件
能否定义自己的内部状态       不能           能
有无生命周期钩子函数        没有            有

函数组件只能被动接收外部数据，没有自己的内部状态，同时也没有生命周期钩子函数

什么时候会用到函数组件？？？
  当你不要定义自己的内部状态，也不需要生命周期钩子函数的时候，用函数组件非常简洁方便

*/
//形参props表示的是接收到的外部数据（外部属性）
function App(props) {
  /* 
    这里的return 相当于类组件中的render方法
  */
  return (
    <div className="App">
      App 
    </div>
  );
}



export default App;

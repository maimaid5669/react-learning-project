import React from 'react';

// 1. 定义 props 的类型
interface GreetingProps {
  name: string;
}

// 2. 在函数签名中接收 props，并指定类型
function Greeting({ name }: GreetingProps) {
  // 3. 在 JSX 中使用 props
  return <h1>你好, {name}! 欢迎学习 React!</h1>;
}

export default Greeting; 
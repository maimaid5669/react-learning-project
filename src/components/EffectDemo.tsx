import React, { useState, useEffect } from 'react';

const EffectDemo: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [seconds, setSeconds] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  // 1. 无依赖数组的 useEffect - 每次渲染都会执行
  useEffect(() => {
    console.log('💡 组件重新渲染了！');
  });

  // 2. 空依赖数组的 useEffect - 只在组件挂载时执行一次
  useEffect(() => {
    console.log('🚀 组件挂载了！（只执行一次）');
    document.title = 'useEffect 演示页面';
    
    // 返回清理函数 - 在组件卸载时执行
    return () => {
      console.log('🧹 组件即将卸载，执行清理工作');
      document.title = 'React App';
    };
  }, []); // 空依赖数组

  // 3. 有特定依赖的 useEffect - 只有当 count 改变时才执行
  useEffect(() => {
    console.log(`📊 count 改变了，新值是: ${count}`);
    if (count > 0) {
      document.title = `计数器: ${count}`;
    }
  }, [count]); // 依赖 count

  // 4. 有特定依赖的 useEffect - 只有当 name 改变时才执行
  useEffect(() => {
    if (name) {
      console.log(`👤 用户名改变了: ${name}`);
    }
  }, [name]); // 依赖 name

  // 5. 事件监听器的 useEffect - 监听窗口大小变化
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    console.log('🔧 添加了窗口大小监听器');

    // 清理函数 - 移除事件监听器
    return () => {
      window.removeEventListener('resize', handleResize);
      console.log('🔧 移除了窗口大小监听器');
    };
  }, []); // 只在挂载时添加监听器

  // 6. 定时器的 useEffect
  useEffect(() => {
    let intervalId: number;

    if (isTimerRunning) {
      intervalId = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
      console.log('⏰ 定时器开始运行');
    }

    // 清理函数 - 清除定时器
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
        console.log('⏰ 定时器已清除');
      }
    };
  }, [isTimerRunning]); // 依赖 isTimerRunning

  // 重置定时器
  const resetTimer = () => {
    setSeconds(0);
    setIsTimerRunning(false);
  };

  return (
    <div style={{ padding: '20px', border: '2px solid #4CAF50', margin: '20px', borderRadius: '8px' }}>
      <h2>React useEffect Hook 演示</h2>
      <p style={{ color: '#666', fontSize: '14px' }}>
        💡 打开浏览器的开发者工具控制台，查看 useEffect 的执行日志
      </p>

      {/* 计数器 - 演示依赖特定状态的 effect */}
      <div style={{ marginBottom: '20px' }}>
        <h3>1. 计数器 (依赖 count 的 useEffect)</h3>
        <p>当前计数: <strong>{count}</strong></p>
        <button onClick={() => setCount(count + 1)}>增加计数</button>
        <button onClick={() => setCount(0)} style={{ marginLeft: '10px' }}>重置</button>
      </div>

      {/* 用户名输入 - 演示依赖特定状态的 effect */}
      <div style={{ marginBottom: '20px' }}>
        <h3>2. 用户名输入 (依赖 name 的 useEffect)</h3>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)}
          placeholder="输入用户名"
        />
        <p>当前用户名: <strong>{name || '未输入'}</strong></p>
      </div>

      {/* 窗口大小监听 - 演示事件监听器的 effect */}
      <div style={{ marginBottom: '20px' }}>
        <h3>3. 窗口大小监听 (事件监听器 useEffect)</h3>
        <p>当前窗口宽度: <strong>{windowWidth}px</strong></p>
        <p style={{ fontSize: '14px', color: '#666' }}>
          💡 试着调整浏览器窗口大小，看看这个值的变化
        </p>
      </div>

      {/* 定时器 - 演示定时器的 effect */}
      <div style={{ marginBottom: '20px' }}>
        <h3>4. 定时器 (定时器 useEffect)</h3>
        <p>运行时间: <strong>{seconds}</strong> 秒</p>
        <button 
          onClick={() => setIsTimerRunning(!isTimerRunning)}
          style={{ 
            backgroundColor: isTimerRunning ? '#f44336' : '#4CAF50',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          {isTimerRunning ? '暂停' : '开始'}
        </button>
        <button 
          onClick={resetTimer}
          style={{ 
            marginLeft: '10px',
            backgroundColor: '#2196F3',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          重置
        </button>
      </div>

      {/* useEffect 类型总结 */}
      <div style={{ backgroundColor: '#f5f5f5', padding: '15px', borderRadius: '5px' }}>
        <h3>📚 useEffect 的常见用法总结:</h3>
        <ul style={{ textAlign: 'left' }}>
          <li><strong>无依赖数组</strong>: 每次渲染都执行</li>
          <li><strong>空依赖数组 []</strong>: 只在组件挂载时执行一次</li>
          <li><strong>有依赖 [state]</strong>: 只有依赖变化时才执行</li>
          <li><strong>返回清理函数</strong>: 用于清理副作用（事件监听器、定时器等）</li>
        </ul>
      </div>
    </div>
  );
};

export default EffectDemo; 
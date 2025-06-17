import React, { useState } from 'react';

const StateDemo: React.FC = () => {
  // 1. 数字类型的状态
  const [count, setCount] = useState<number>(0);
  
  // 2. 字符串类型的状态
  const [name, setName] = useState<string>('');
  
  // 3. 布尔类型的状态
  const [isVisible, setIsVisible] = useState<boolean>(true);
  
  // 4. 对象类型的状态
  const [user, setUser] = useState<{name: string; age: number}>({
    name: '',
    age: 0
  });
  
  // 5. 数组类型的状态
  const [items, setItems] = useState<string[]>(['苹果', '香蕉']);

  // 处理用户信息更新
  const updateUser = (field: 'name' | 'age', value: string | number) => {
    setUser(prevUser => ({
      ...prevUser, // 展开之前的属性
      [field]: value // 更新指定字段
    }));
  };

  // 添加新项目到数组
  const addItem = () => {
    const newItem = `新项目 ${items.length + 1}`;
    setItems(prevItems => [...prevItems, newItem]);
  };

  // 删除数组中的项目
  const removeItem = (index: number) => {
    setItems(prevItems => prevItems.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: '20px', border: '2px solid #ccc', margin: '20px', borderRadius: '8px' }}>
      <h2>React useState Hook 演示</h2>
      
      {/* 数字状态示例 */}
      <div style={{ marginBottom: '20px' }}>
        <h3>1. 数字状态 (Counter)</h3>
        <p>当前计数: <strong>{count}</strong></p>
        <button onClick={() => setCount(count + 1)}>增加</button>
        <button onClick={() => setCount(count - 1)} style={{ marginLeft: '10px' }}>减少</button>
        <button onClick={() => setCount(0)} style={{ marginLeft: '10px' }}>重置</button>
      </div>

      {/* 字符串状态示例 */}
      <div style={{ marginBottom: '20px' }}>
        <h3>2. 字符串状态 (输入框)</h3>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)}
          placeholder="输入你的名字"
        />
        <p>你好, <strong>{name || '匿名用户'}</strong>!</p>
      </div>

      {/* 布尔状态示例 */}
      <div style={{ marginBottom: '20px' }}>
        <h3>3. 布尔状态 (显示/隐藏)</h3>
        <button onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? '隐藏' : '显示'} 内容
        </button>
        {isVisible && (
          <p style={{ backgroundColor: '#f0f8ff', padding: '10px', marginTop: '10px' }}>
            🎉 这是一个可以显示/隐藏的内容！
          </p>
        )}
      </div>

      {/* 对象状态示例 */}
      <div style={{ marginBottom: '20px' }}>
        <h3>4. 对象状态 (用户信息)</h3>
        <div>
          <input 
            type="text" 
            placeholder="用户名" 
            value={user.name}
            onChange={(e) => updateUser('name', e.target.value)}
          />
          <input 
            type="number" 
            placeholder="年龄" 
            value={user.age || ''}
            onChange={(e) => updateUser('age', parseInt(e.target.value) || 0)}
            style={{ marginLeft: '10px' }}
          />
        </div>
        <p>用户信息: {user.name} ({user.age} 岁)</p>
      </div>

      {/* 数组状态示例 */}
      <div>
        <h3>5. 数组状态 (列表管理)</h3>
        <button onClick={addItem}>添加项目</button>
        <ul>
          {items.map((item, index) => (
            <li key={index} style={{ marginBottom: '5px' }}>
              {item}
              <button 
                onClick={() => removeItem(index)}
                style={{ marginLeft: '10px', fontSize: '12px' }}
              >
                删除
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StateDemo; 
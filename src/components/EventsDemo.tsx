import React, { useState, useRef } from 'react';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const EventsDemo: React.FC = () => {
  // 基础事件演示的状态
  const [clickCount, setClickCount] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>('');
  const [mousePosition, setMousePosition] = useState<{x: number, y: number}>({x: 0, y: 0});
  
  // 表单演示的状态
  const [userForm, setUserForm] = useState<{
    name: string;
    email: string;
    age: string;
    message: string;
  }>({
    name: '',
    email: '',
    age: '',
    message: ''
  });
  
  // Todo 列表演示的状态
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: '学习 React 事件处理', completed: false },
    { id: 2, text: '练习表单处理', completed: false }
  ]);
  const [newTaskText, setNewTaskText] = useState<string>('');
  
  // 键盘事件演示的状态
  const [keyInfo, setKeyInfo] = useState<string>('');
  
  // 使用 useRef 来直接操作 DOM
  const inputRef = useRef<HTMLInputElement>(null);

  // 事件处理函数们
  const handleClick = () => {
    setClickCount(prev => prev + 1);
  };

  const handleDoubleClick = () => {
    setClickCount(0);
    alert('计数器已重置！');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  // 表单相关事件处理
  const handleFormInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUserForm(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 阻止默认的表单提交行为
    console.log('表单提交数据:', userForm);
    alert(`表单提交成功！\n姓名: ${userForm.name}\n邮箱: ${userForm.email}\n年龄: ${userForm.age}`);
  };

  const handleFormReset = () => {
    setUserForm({ name: '', email: '', age: '', message: '' });
  };

  // Todo 相关事件处理
  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTaskText.trim()) {
      const newTask: Task = {
        id: Date.now(),
        text: newTaskText.trim(),
        completed: false
      };
      setTasks(prev => [...prev, newTask]);
      setNewTaskText('');
    }
  };

  const handleToggleTask = (id: number) => {
    setTasks(prev => prev.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleDeleteTask = (id: number) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  // 键盘事件处理
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setKeyInfo(`按键: ${e.key}, Code: ${e.code}, Ctrl: ${e.ctrlKey}, Shift: ${e.shiftKey}`);
  };

  // 焦点事件处理
  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.style.backgroundColor = '#e3f2fd';
    }
  };

  const handleBlur = () => {
    if (inputRef.current) {
      inputRef.current.style.backgroundColor = 'white';
    }
  };

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      
      {/* 1. 基础点击事件 */}
      <div style={{ 
        backgroundColor: 'white',
        padding: '1.5rem',
        borderRadius: '8px',
        border: '2px solid #e9ecef',
        marginBottom: '2rem'
      }}>
        <h3 style={{ color: '#007bff', marginBottom: '1rem' }}>1. 点击事件 (onClick)</h3>
        <p>点击次数: <strong>{clickCount}</strong></p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button 
            onClick={handleClick}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            单击 (+1)
          </button>
          <button 
            onDoubleClick={handleDoubleClick}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            双击重置
          </button>
        </div>
      </div>

      {/* 2. 输入事件 */}
      <div style={{ 
        backgroundColor: 'white',
        padding: '1.5rem',
        borderRadius: '8px',
        border: '2px solid #e9ecef',
        marginBottom: '2rem'
      }}>
        <h3 style={{ color: '#28a745', marginBottom: '1rem' }}>2. 输入事件 (onChange)</h3>
        <input 
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="在这里输入文字..."
          style={{
            width: '100%',
            padding: '0.5rem',
            border: '2px solid #dee2e6',
            borderRadius: '4px',
            marginBottom: '1rem'
          }}
        />
        <p>你输入的内容: <strong>{inputValue || '(还没有输入)'}</strong></p>
        <p>字符数: <strong>{inputValue.length}</strong></p>
      </div>

      {/* 3. 鼠标事件 */}
      <div style={{ 
        backgroundColor: 'white',
        padding: '1.5rem',
        borderRadius: '8px',
        border: '2px solid #e9ecef',
        marginBottom: '2rem'
      }}>
        <h3 style={{ color: '#ffc107', marginBottom: '1rem' }}>3. 鼠标事件 (onMouseMove)</h3>
        <div 
          onMouseMove={handleMouseMove}
          style={{
            backgroundColor: '#f8f9fa',
            border: '2px dashed #dee2e6',
            borderRadius: '4px',
            padding: '2rem',
            textAlign: 'center',
            cursor: 'crosshair'
          }}
        >
          <p>在这个区域移动鼠标</p>
          <p>鼠标位置: X: {mousePosition.x}, Y: {mousePosition.y}</p>
        </div>
      </div>

      {/* 4. 表单事件 */}
      <div style={{ 
        backgroundColor: 'white',
        padding: '1.5rem',
        borderRadius: '8px',
        border: '2px solid #e9ecef',
        marginBottom: '2rem'
      }}>
        <h3 style={{ color: '#6f42c1', marginBottom: '1rem' }}>4. 表单事件 (onSubmit)</h3>
        <form onSubmit={handleFormSubmit} style={{ display: 'grid', gap: '1rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <input 
              type="text"
              placeholder="姓名"
              value={userForm.name}
              onChange={handleFormInputChange('name')}
              style={{
                padding: '0.5rem',
                border: '2px solid #dee2e6',
                borderRadius: '4px'
              }}
              required
            />
            <input 
              type="email"
              placeholder="邮箱"
              value={userForm.email}
              onChange={handleFormInputChange('email')}
              style={{
                padding: '0.5rem',
                border: '2px solid #dee2e6',
                borderRadius: '4px'
              }}
              required
            />
          </div>
          <input 
            type="number"
            placeholder="年龄"
            value={userForm.age}
            onChange={handleFormInputChange('age')}
            style={{
              padding: '0.5rem',
              border: '2px solid #dee2e6',
              borderRadius: '4px'
            }}
            min="1"
            max="120"
          />
          <textarea 
            placeholder="留言"
            value={userForm.message}
            onChange={handleFormInputChange('message')}
            rows={3}
            style={{
              padding: '0.5rem',
              border: '2px solid #dee2e6',
              borderRadius: '4px',
              resize: 'vertical'
            }}
          />
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button 
              type="submit"
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              提交表单
            </button>
            <button 
              type="button"
              onClick={handleFormReset}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#6c757d',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              重置表单
            </button>
          </div>
        </form>
      </div>

      {/* 5. Todo 列表 - 综合事件处理 */}
      <div style={{ 
        backgroundColor: 'white',
        padding: '1.5rem',
        borderRadius: '8px',
        border: '2px solid #e9ecef',
        marginBottom: '2rem'
      }}>
        <h3 style={{ color: '#dc3545', marginBottom: '1rem' }}>5. Todo 列表 (综合事件处理)</h3>
        
        <form onSubmit={handleAddTask} style={{ marginBottom: '1rem' }}>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <input 
              type="text"
              value={newTaskText}
              onChange={(e) => setNewTaskText(e.target.value)}
              placeholder="添加新任务..."
              style={{
                flex: 1,
                padding: '0.5rem',
                border: '2px solid #dee2e6',
                borderRadius: '4px'
              }}
            />
            <button 
              type="submit"
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              添加
            </button>
          </div>
        </form>

        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {tasks.map(task => (
            <li 
              key={task.id}
              style={{ 
                display: 'flex',
                alignItems: 'center',
                padding: '0.5rem',
                marginBottom: '0.5rem',
                backgroundColor: task.completed ? '#f8f9fa' : 'white',
                border: '1px solid #dee2e6',
                borderRadius: '4px'
              }}
            >
              <input 
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggleTask(task.id)}
                style={{ marginRight: '0.5rem' }}
              />
              <span 
                style={{ 
                  flex: 1,
                  textDecoration: task.completed ? 'line-through' : 'none',
                  color: task.completed ? '#6c757d' : 'inherit'
                }}
              >
                {task.text}
              </span>
              <button 
                onClick={() => handleDeleteTask(task.id)}
                style={{
                  padding: '0.25rem 0.5rem',
                  backgroundColor: '#dc3545',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '0.8rem'
                }}
              >
                删除
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* 6. 键盘事件 */}
      <div style={{ 
        backgroundColor: 'white',
        padding: '1.5rem',
        borderRadius: '8px',
        border: '2px solid #e9ecef',
        marginBottom: '2rem'
      }}>
        <h3 style={{ color: '#17a2b8', marginBottom: '1rem' }}>6. 键盘事件 (onKeyDown)</h3>
        <input 
          type="text"
          onKeyDown={handleKeyDown}
          placeholder="在这里按任意键..."
          style={{
            width: '100%',
            padding: '0.5rem',
            border: '2px solid #dee2e6',
            borderRadius: '4px',
            marginBottom: '1rem'
          }}
        />
        <p>键盘信息: <strong>{keyInfo || '还没有按键'}</strong></p>
      </div>

      {/* 7. 焦点事件和 useRef */}
      <div style={{ 
        backgroundColor: 'white',
        padding: '1.5rem',
        borderRadius: '8px',
        border: '2px solid #e9ecef',
        marginBottom: '2rem'
      }}>
        <h3 style={{ color: '#fd7e14', marginBottom: '1rem' }}>7. 焦点事件 + useRef (onFocus/onBlur)</h3>
        <input 
          ref={inputRef}
          type="text"
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="点击获得焦点，点击外部失去焦点"
          style={{
            width: '100%',
            padding: '0.5rem',
            border: '2px solid #dee2e6',
            borderRadius: '4px',
            transition: 'background-color 0.2s ease'
          }}
        />
        <p style={{ fontSize: '0.9rem', color: '#6c757d', marginTop: '0.5rem' }}>
          💡 注意输入框获得/失去焦点时背景色的变化
        </p>
      </div>

      {/* 事件处理总结 */}
      <div style={{ 
        backgroundColor: '#f8f9fa',
        padding: '1.5rem',
        borderRadius: '8px',
        border: '2px solid #dee2e6'
      }}>
        <h3 style={{ color: '#495057', marginBottom: '1rem' }}>📚 事件处理要点总结</h3>
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1rem'
        }}>
          <div>
            <h4 style={{ color: '#007bff', fontSize: '1rem' }}>事件对象 (e)</h4>
            <p style={{ fontSize: '0.9rem', margin: 0, color: '#6c757d' }}>
              包含事件相关信息，如 target、value、key 等
            </p>
          </div>
          <div>
            <h4 style={{ color: '#007bff', fontSize: '1rem' }}>阻止默认行为</h4>
            <p style={{ fontSize: '0.9rem', margin: 0, color: '#6c757d' }}>
              使用 e.preventDefault() 阻止表单提交等默认行为
            </p>
          </div>
          <div>
            <h4 style={{ color: '#007bff', fontSize: '1rem' }}>合成事件</h4>
            <p style={{ fontSize: '0.9rem', margin: 0, color: '#6c757d' }}>
              React 提供的跨浏览器兼容的事件系统
            </p>
          </div>
          <div>
            <h4 style={{ color: '#007bff', fontSize: '1rem' }}>事件处理器</h4>
            <p style={{ fontSize: '0.9rem', margin: 0, color: '#6c757d' }}>
              以 on 开头的属性，如 onClick、onChange、onSubmit 等
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsDemo; 
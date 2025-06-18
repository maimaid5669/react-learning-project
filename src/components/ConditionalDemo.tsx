import React, { useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
  isActive: boolean;
}

interface Message {
  id: number;
  text: string;
  type: 'success' | 'warning' | 'error' | 'info';
}

const ConditionalDemo: React.FC = () => {
  // 基础条件渲染状态
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [userRole, setUserRole] = useState<'admin' | 'user' | 'guest'>('guest');
  
  // 用户数据
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const users: User[] = [
    { id: 1, name: '张三', email: 'zhangsan@example.com', role: 'admin', isActive: true },
    { id: 2, name: '李四', email: 'lisi@example.com', role: 'user', isActive: true },
    { id: 3, name: '王五', email: 'wangwu@example.com', role: 'user', isActive: false },
    { id: 4, name: '赵六', email: 'zhaoliu@example.com', role: 'guest', isActive: true },
  ];

  // 消息提示状态
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: '欢迎来到条件渲染学习！', type: 'info' },
  ]);

  // 购物车状态
  const [cartItems, setCartItems] = useState<number>(0);

  // 加载状态
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadingData, setLoadingData] = useState<string | null>(null);

  // 模拟登录
  const handleLogin = (role: 'admin' | 'user' | 'guest') => {
    const user = users.find(u => u.role === role);
    if (user) {
      setCurrentUser(user);
      setIsLoggedIn(true);
      setUserRole(role);
      addMessage(`欢迎回来，${user.name}！`, 'success');
    }
  };

  // 模拟登出
  const handleLogout = () => {
    setCurrentUser(null);
    setIsLoggedIn(false);
    setUserRole('guest');
    addMessage('您已成功登出', 'info');
  };

  // 添加消息
  const addMessage = (text: string, type: Message['type']) => {
    const newMessage: Message = {
      id: Date.now(),
      text,
      type
    };
    setMessages(prev => [...prev, newMessage]);
    
    // 3秒后自动删除消息
    setTimeout(() => {
      setMessages(prev => prev.filter(msg => msg.id !== newMessage.id));
    }, 3000);
  };

  // 模拟数据加载
  const simulateLoading = () => {
    setIsLoading(true);
    setLoadingData(null);
    
    setTimeout(() => {
      setIsLoading(false);
      setLoadingData('数据加载完成！这是模拟的数据内容。');
      addMessage('数据加载成功！', 'success');
    }, 2000);
  };

  // 根据消息类型返回样式
  const getMessageStyle = (type: Message['type']) => {
    const baseStyle = {
      padding: '0.75rem 1rem',
      borderRadius: '4px',
      marginBottom: '0.5rem',
      border: '1px solid',
    };

    switch (type) {
      case 'success':
        return { ...baseStyle, backgroundColor: '#d4edda', color: '#155724', borderColor: '#c3e6cb' };
      case 'warning':
        return { ...baseStyle, backgroundColor: '#fff3cd', color: '#856404', borderColor: '#ffeaa7' };
      case 'error':
        return { ...baseStyle, backgroundColor: '#f8d7da', color: '#721c24', borderColor: '#f5c6cb' };
      case 'info':
        return { ...baseStyle, backgroundColor: '#d1ecf1', color: '#0c5460', borderColor: '#bee5eb' };
      default:
        return baseStyle;
    }
  };

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      
      {/* 1. 基础条件渲染 - if 语句 */}
      <div style={{ 
        backgroundColor: 'white',
        padding: '1.5rem',
        borderRadius: '8px',
        border: '2px solid #e9ecef',
        marginBottom: '2rem'
      }}>
        <h3 style={{ color: '#007bff', marginBottom: '1rem' }}>1. 基础条件渲染 (if 语句)</h3>
        
        <div style={{ marginBottom: '1rem' }}>
          <button 
            onClick={() => setShowDetails(!showDetails)}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: showDetails ? '#dc3545' : '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            {showDetails ? '隐藏详情' : '显示详情'}
          </button>
        </div>

        {/* 使用 if 语句的条件渲染 */}
        {showDetails && (
          <div style={{ 
            backgroundColor: '#f8f9fa',
            padding: '1rem',
            borderRadius: '4px',
            border: '1px solid #dee2e6'
          }}>
            <h4>详细信息</h4>
            <p>这是通过 if 语句进行条件渲染的内容。</p>
            <p>只有当 showDetails 为 true 时，这个内容才会显示。</p>
            <p>这是最常用的条件渲染方式。</p>
          </div>
        )}
      </div>

      {/* 2. 三元运算符条件渲染 */}
      <div style={{ 
        backgroundColor: 'white',
        padding: '1.5rem',
        borderRadius: '8px',
        border: '2px solid #e9ecef',
        marginBottom: '2rem'
      }}>
        <h3 style={{ color: '#28a745', marginBottom: '1rem' }}>2. 三元运算符条件渲染</h3>
        
        <div style={{ marginBottom: '1rem' }}>
          <button 
            onClick={() => setIsLoggedIn(!isLoggedIn)}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            {isLoggedIn ? '登出' : '登录'}
          </button>
        </div>

        {/* 使用三元运算符的条件渲染 */}
        <div style={{ 
          backgroundColor: isLoggedIn ? '#d4edda' : '#f8d7da',
          color: isLoggedIn ? '#155724' : '#721c24',
          padding: '1rem',
          borderRadius: '4px',
          border: `1px solid ${isLoggedIn ? '#c3e6cb' : '#f5c6cb'}`
        }}>
          {isLoggedIn ? (
            <div>
              <h4>✅ 已登录</h4>
              <p>欢迎回来！您现在可以访问所有功能。</p>
            </div>
          ) : (
            <div>
              <h4>❌ 未登录</h4>
              <p>请先登录以访问更多功能。</p>
            </div>
          )}
        </div>
      </div>

      {/* 3. 多条件渲染 - 角色权限 */}
      <div style={{ 
        backgroundColor: 'white',
        padding: '1.5rem',
        borderRadius: '8px',
        border: '2px solid #e9ecef',
        marginBottom: '2rem'
      }}>
        <h3 style={{ color: '#ffc107', marginBottom: '1rem' }}>3. 多条件渲染 (角色权限)</h3>
        
        <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <button 
            onClick={() => handleLogin('admin')}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            以管理员身份登录
          </button>
          <button 
            onClick={() => handleLogin('user')}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            以用户身份登录
          </button>
          <button 
            onClick={() => handleLogin('guest')}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            以游客身份登录
          </button>
          <button 
            onClick={handleLogout}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#fd7e14',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            登出
          </button>
        </div>

        {/* 根据角色显示不同内容 */}
        <div style={{ 
          backgroundColor: '#f8f9fa',
          padding: '1rem',
          borderRadius: '4px',
          border: '1px solid #dee2e6'
        }}>
          {currentUser ? (
            <div>
              <h4>当前用户: {currentUser.name} ({currentUser.role})</h4>
              
              {/* 管理员权限 */}
              {userRole === 'admin' && (
                <div style={{ marginTop: '1rem' }}>
                  <h5 style={{ color: '#dc3545' }}>🔧 管理员功能</h5>
                  <ul>
                    <li>用户管理</li>
                    <li>系统设置</li>
                    <li>数据分析</li>
                    <li>权限管理</li>
                  </ul>
                </div>
              )}
              
              {/* 普通用户权限 */}
              {userRole === 'user' && (
                <div style={{ marginTop: '1rem' }}>
                  <h5 style={{ color: '#28a745' }}>👤 用户功能</h5>
                  <ul>
                    <li>个人资料</li>
                    <li>购买历史</li>
                    <li>收藏夹</li>
                  </ul>
                </div>
              )}
              
              {/* 游客权限 */}
              {userRole === 'guest' && (
                <div style={{ marginTop: '1rem' }}>
                  <h5 style={{ color: '#6c757d' }}>🔍 游客功能</h5>
                  <ul>
                    <li>浏览商品</li>
                    <li>查看公开信息</li>
                  </ul>
                  <p style={{ color: '#6c757d', fontSize: '0.9rem' }}>
                    注册账户以解锁更多功能！
                  </p>
                </div>
              )}
            </div>
          ) : (
            <p style={{ color: '#6c757d' }}>请选择一个角色登录</p>
          )}
        </div>
      </div>

      {/* 4. 动态消息系统 */}
      <div style={{ 
        backgroundColor: 'white',
        padding: '1.5rem',
        borderRadius: '8px',
        border: '2px solid #e9ecef',
        marginBottom: '2rem'
      }}>
        <h3 style={{ color: '#6f42c1', marginBottom: '1rem' }}>4. 动态消息系统</h3>
        
        <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <button 
            onClick={() => addMessage('这是一条成功消息！', 'success')}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            成功消息
          </button>
          <button 
            onClick={() => addMessage('这是一条警告消息！', 'warning')}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#ffc107',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            警告消息
          </button>
          <button 
            onClick={() => addMessage('这是一条错误消息！', 'error')}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            错误消息
          </button>
          <button 
            onClick={() => addMessage('这是一条信息消息！', 'info')}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#17a2b8',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            信息消息
          </button>
        </div>

        {/* 消息列表 */}
        <div>
          {messages.length > 0 ? (
            messages.map(message => (
              <div key={message.id} style={getMessageStyle(message.type)}>
                {message.text}
              </div>
            ))
          ) : (
            <p style={{ color: '#6c757d' }}>暂无消息</p>
          )}
        </div>
      </div>

      {/* 5. 数字条件渲染 - 购物车 */}
      <div style={{ 
        backgroundColor: 'white',
        padding: '1.5rem',
        borderRadius: '8px',
        border: '2px solid #e9ecef',
        marginBottom: '2rem'
      }}>
        <h3 style={{ color: '#dc3545', marginBottom: '1rem' }}>5. 数字条件渲染 (购物车)</h3>
        
        <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <button 
            onClick={() => setCartItems(prev => prev + 1)}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            添加商品
          </button>
          <button 
            onClick={() => setCartItems(prev => Math.max(0, prev - 1))}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            移除商品
          </button>
          <button 
            onClick={() => setCartItems(0)}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            清空购物车
          </button>
        </div>

        <div style={{ 
          backgroundColor: '#f8f9fa',
          padding: '1rem',
          borderRadius: '4px',
          border: '1px solid #dee2e6'
        }}>
          <h4>🛒 购物车状态</h4>
          
          {/* 根据商品数量显示不同内容 */}
          {cartItems === 0 ? (
            <div>
              <p>🛒 购物车是空的</p>
              <p style={{ color: '#6c757d' }}>开始添加一些商品吧！</p>
            </div>
          ) : cartItems === 1 ? (
            <div>
              <p>🛒 购物车中有 <strong>1</strong> 件商品</p>
              <p style={{ color: '#28a745' }}>继续购物或去结算</p>
            </div>
          ) : cartItems < 5 ? (
            <div>
              <p>🛒 购物车中有 <strong>{cartItems}</strong> 件商品</p>
              <p style={{ color: '#ffc107' }}>还可以添加更多商品</p>
            </div>
          ) : (
            <div>
              <p>🛒 购物车中有 <strong>{cartItems}</strong> 件商品</p>
              <p style={{ color: '#dc3545' }}>购物车已满！考虑去结算</p>
            </div>
          )}
          
          {/* 只有当有商品时才显示结算按钮 */}
          {cartItems > 0 && (
            <button 
              style={{
                marginTop: '1rem',
                padding: '0.75rem 1.5rem',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
              onClick={() => {
                addMessage(`成功结算 ${cartItems} 件商品！`, 'success');
                setCartItems(0);
              }}
            >
              去结算 ({cartItems} 件商品)
            </button>
          )}
        </div>
      </div>

      {/* 6. 加载状态条件渲染 */}
      <div style={{ 
        backgroundColor: 'white',
        padding: '1.5rem',
        borderRadius: '8px',
        border: '2px solid #e9ecef',
        marginBottom: '2rem'
      }}>
        <h3 style={{ color: '#17a2b8', marginBottom: '1rem' }}>6. 加载状态条件渲染</h3>
        
        <div style={{ marginBottom: '1rem' }}>
          <button 
            onClick={simulateLoading}
            disabled={isLoading}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: isLoading ? '#6c757d' : '#17a2b8',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: isLoading ? 'not-allowed' : 'pointer'
            }}
          >
            {isLoading ? '加载中...' : '开始加载数据'}
          </button>
        </div>

        <div style={{ 
          backgroundColor: '#f8f9fa',
          padding: '1rem',
          borderRadius: '4px',
          border: '1px solid #dee2e6',
          minHeight: '100px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {isLoading ? (
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                width: '40px',
                height: '40px',
                border: '4px solid #f3f3f3',
                borderTop: '4px solid #17a2b8',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite',
                margin: '0 auto 1rem'
              }}>
                <style>
                  {`
                    @keyframes spin {
                      0% { transform: rotate(0deg); }
                      100% { transform: rotate(360deg); }
                    }
                  `}
                </style>
              </div>
              <p>正在加载数据...</p>
            </div>
          ) : loadingData ? (
            <div style={{ textAlign: 'center' }}>
              <h4>📊 数据加载完成</h4>
              <p>{loadingData}</p>
            </div>
          ) : (
            <p style={{ color: '#6c757d' }}>点击按钮开始加载数据</p>
          )}
        </div>
      </div>

      {/* 条件渲染总结 */}
      <div style={{ 
        backgroundColor: '#f8f9fa',
        padding: '1.5rem',
        borderRadius: '8px',
        border: '2px solid #dee2e6'
      }}>
        <h3 style={{ color: '#495057', marginBottom: '1rem' }}>📚 条件渲染方法总结</h3>
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1rem'
        }}>
          <div>
            <h4 style={{ color: '#007bff', fontSize: '1rem' }}>1. 逻辑与 (&&)</h4>
            <p style={{ fontSize: '0.9rem', margin: 0, color: '#6c757d' }}>
              <code>{`{condition && <Component />}`}</code><br/>
              简单的显示/隐藏逻辑
            </p>
          </div>
          <div>
            <h4 style={{ color: '#007bff', fontSize: '1rem' }}>2. 三元运算符 (?:)</h4>
            <p style={{ fontSize: '0.9rem', margin: 0, color: '#6c757d' }}>
              <code>{`{condition ? <A /> : <B />}`}</code><br/>
              二选一的显示逻辑
            </p>
          </div>
          <div>
            <h4 style={{ color: '#007bff', fontSize: '1rem' }}>3. 多条件判断</h4>
            <p style={{ fontSize: '0.9rem', margin: 0, color: '#6c757d' }}>
              使用多个 if 语句或 switch 语句处理复杂逻辑
            </p>
          </div>
          <div>
            <h4 style={{ color: '#007bff', fontSize: '1rem' }}>4. 函数返回</h4>
            <p style={{ fontSize: '0.9rem', margin: 0, color: '#6c757d' }}>
              将复杂的条件逻辑封装在函数中
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConditionalDemo; 
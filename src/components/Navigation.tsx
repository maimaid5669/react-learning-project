import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: '🏠 首页', description: '项目介绍' },
    { path: '/jsx-components', label: '📝 JSX & 组件', description: '第二部分' },
    { path: '/state-lifecycle', label: '🔄 状态 & 生命周期', description: '第三部分' },
    { path: '/events', label: '🖱️ 事件处理', description: '第四部分' },
    { path: '/conditional-rendering', label: '🔀 条件渲染', description: '第五部分' },
    { path: '/lists', label: '📋 列表渲染', description: '第六部分' },
  ];

  return (
    <nav style={{
      backgroundColor: '#f8f9fa',
      padding: '1rem',
      borderBottom: '2px solid #e9ecef',
      marginBottom: '2rem'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        <h1 style={{ 
          margin: 0, 
          color: '#343a40',
          fontSize: '1.5rem',
          textAlign: 'center'
        }}>
          🚀 React 前端学习实践
        </h1>
        
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
          justifyContent: 'center'
        }}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              style={{
                padding: '0.5rem 1rem',
                textDecoration: 'none',
                borderRadius: '8px',
                border: '2px solid #dee2e6',
                backgroundColor: location.pathname === item.path ? '#007bff' : 'white',
                color: location.pathname === item.path ? 'white' : '#495057',
                fontSize: '0.9rem',
                transition: 'all 0.2s ease',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minWidth: '120px',
                textAlign: 'center'
              }}
              onMouseEnter={(e) => {
                if (location.pathname !== item.path) {
                  e.currentTarget.style.backgroundColor = '#e9ecef';
                }
              }}
              onMouseLeave={(e) => {
                if (location.pathname !== item.path) {
                  e.currentTarget.style.backgroundColor = 'white';
                }
              }}
            >
              <span style={{ fontWeight: 'bold' }}>{item.label}</span>
              <span style={{ fontSize: '0.75rem', opacity: 0.8 }}>{item.description}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 
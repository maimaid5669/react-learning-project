import React from 'react';
import { Link } from 'react-router-dom';

const ConditionalRenderingPage: React.FC = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#333' }}>
          🔀 条件渲染
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#666' }}>
          第五部分：学习根据条件动态显示不同的 UI 内容
        </p>
      </div>

      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '1.5rem', 
        borderRadius: '8px',
        marginBottom: '2rem',
        border: '2px solid #6c757d'
      }}>
        <h2 style={{ color: '#495057', marginBottom: '1rem' }}>📋 即将学习</h2>
        <p style={{ color: '#495057', margin: 0 }}>
          这个部分还在准备中，很快就会上线！你将学习如何使用条件语句来控制组件的渲染。
        </p>
      </div>

      <div style={{ 
        textAlign: 'center',
        backgroundColor: '#e9ecef',
        padding: '2rem',
        borderRadius: '8px',
        border: '2px solid #dee2e6'
      }}>
        <h3 style={{ color: '#495057', marginBottom: '1rem' }}>🚧 内容准备中</h3>
        <p style={{ color: '#6c757d', marginBottom: '1.5rem' }}>
          敬请期待条件渲染的详细学习内容和实际演示！
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link 
            to="/events"
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#6c757d',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '6px',
              fontSize: '1rem'
            }}
          >
            ← 返回：事件处理
          </Link>
          <Link 
            to="/"
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#007bff',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '6px',
              fontSize: '1rem'
            }}
          >
            返回首页
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConditionalRenderingPage; 
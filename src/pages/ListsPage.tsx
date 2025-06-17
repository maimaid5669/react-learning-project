import React from 'react';
import { Link } from 'react-router-dom';

const ListsPage: React.FC = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#333' }}>
          📋 列表渲染
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#666' }}>
          第六部分：学习如何渲染数据列表和使用 Keys
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
          这个部分还在准备中，很快就会上线！你将学习如何使用 .map() 方法渲染列表，以及 key 属性的重要性。
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
          敬请期待列表渲染的详细学习内容和实际演示！
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link 
            to="/conditional-rendering"
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#6c757d',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '6px',
              fontSize: '1rem'
            }}
          >
            ← 返回：条件渲染
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

export default ListsPage; 
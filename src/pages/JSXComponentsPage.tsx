import React from 'react';
import { Link } from 'react-router-dom';
import Greeting from '../components/Greeting';

const JSXComponentsPage: React.FC = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#333' }}>
          📝 JSX 语法和组件
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#666' }}>
          第二部分：学习 React 的基础语法和组件概念
        </p>
      </div>

      <div style={{ 
        backgroundColor: '#e8f5e8', 
        padding: '1.5rem', 
        borderRadius: '8px',
        marginBottom: '2rem',
        border: '2px solid #28a745'
      }}>
        <h2 style={{ color: '#155724', marginBottom: '1rem' }}>✅ 学习完成</h2>
        <p style={{ color: '#155724', margin: 0 }}>
          恭喜！你已经掌握了 JSX 语法和组件的基础知识。
        </p>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#495057', borderBottom: '2px solid #dee2e6', paddingBottom: '0.5rem' }}>
          🎯 学习成果展示
        </h2>
        
        <div style={{ 
          backgroundColor: 'white',
          padding: '1.5rem',
          borderRadius: '8px',
          border: '2px solid #e9ecef',
          marginTop: '1rem'
        }}>
          <h3 style={{ color: '#007bff', marginBottom: '1rem' }}>Greeting 组件演示</h3>
          <p style={{ marginBottom: '1rem', color: '#6c757d' }}>
            这是你创建的第一个 React 函数式组件，展示了如何：
          </p>
          <ul style={{ marginBottom: '1rem', color: '#6c757d' }}>
            <li>定义 TypeScript 接口来描述 props 类型</li>
            <li>创建可重用的函数式组件</li>
            <li>通过 props 传递数据</li>
            <li>在 JSX 中使用 JavaScript 表达式</li>
          </ul>
          
          <div style={{ 
            backgroundColor: '#f8f9fa',
            padding: '1rem',
            borderRadius: '4px',
            border: '1px solid #dee2e6'
          }}>
            <Greeting name="React 学习者" />
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#495057', borderBottom: '2px solid #dee2e6', paddingBottom: '0.5rem' }}>
          📚 关键概念回顾
        </h2>
        
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1rem',
          marginTop: '1rem'
        }}>
          <div style={{ 
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '8px',
            border: '2px solid #e9ecef'
          }}>
            <h4 style={{ color: '#007bff', marginBottom: '0.5rem' }}>JSX 语法</h4>
            <p style={{ fontSize: '0.9rem', color: '#6c757d', margin: 0 }}>
              JavaScript + XML，允许在 JavaScript 中编写类似 HTML 的语法
            </p>
          </div>
          
          <div style={{ 
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '8px',
            border: '2px solid #e9ecef'
          }}>
            <h4 style={{ color: '#007bff', marginBottom: '0.5rem' }}>函数式组件</h4>
            <p style={{ fontSize: '0.9rem', color: '#6c757d', margin: 0 }}>
              返回 JSX 的 JavaScript 函数，是 React 组件的推荐写法
            </p>
          </div>
          
          <div style={{ 
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '8px',
            border: '2px solid #e9ecef'
          }}>
            <h4 style={{ color: '#007bff', marginBottom: '0.5rem' }}>Props</h4>
            <p style={{ fontSize: '0.9rem', color: '#6c757d', margin: 0 }}>
              从父组件传递给子组件的属性，使组件可重用和可配置
            </p>
          </div>
          
          <div style={{ 
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '8px',
            border: '2px solid #e9ecef'
          }}>
            <h4 style={{ color: '#007bff', marginBottom: '0.5rem' }}>TypeScript 接口</h4>
            <p style={{ fontSize: '0.9rem', color: '#6c757d', margin: 0 }}>
              定义 props 的类型，提供类型安全和更好的开发体验
            </p>
          </div>
        </div>
      </div>

      <div style={{ 
        textAlign: 'center',
        backgroundColor: '#f8f9fa',
        padding: '2rem',
        borderRadius: '8px',
        border: '2px solid #dee2e6'
      }}>
        <h3 style={{ color: '#495057', marginBottom: '1rem' }}>继续学习之旅</h3>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link 
            to="/state-lifecycle"
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#28a745',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '6px',
              fontSize: '1rem'
            }}
          >
            下一步：状态和生命周期 →
          </Link>
          <Link 
            to="/"
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#6c757d',
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

export default JSXComponentsPage; 
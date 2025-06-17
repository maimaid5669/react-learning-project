import React from 'react';
import { Link } from 'react-router-dom';
import Greeting from '../components/Greeting';

const HomePage: React.FC = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#333' }}>
          欢迎来到 React 学习之旅！🎉
        </h1>
        <Greeting name="未来的 React 开发者" />
      </div>

      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '2rem', 
        borderRadius: '12px',
        marginBottom: '2rem'
      }}>
        <h2 style={{ color: '#495057', marginBottom: '1rem' }}>📚 学习目标</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#6c757d' }}>
          通过这个互动式学习项目，你将从零开始掌握 React 开发的核心技能。
          每个部分都有实际的代码示例和可交互的演示组件。
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1.5rem',
        marginBottom: '2rem'
      }}>
        <div style={{ 
          backgroundColor: 'white',
          padding: '1.5rem',
          borderRadius: '8px',
          border: '2px solid #e9ecef',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ color: '#28a745', marginBottom: '1rem' }}>✅ 已完成</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '0.5rem', color: '#6c757d' }}>
              📁 项目结构理解
            </li>
            <li style={{ marginBottom: '0.5rem', color: '#6c757d' }}>
              📝 JSX 语法和组件
            </li>
            <li style={{ marginBottom: '0.5rem', color: '#6c757d' }}>
              🔄 状态和生命周期
            </li>
          </ul>
        </div>

        <div style={{ 
          backgroundColor: 'white',
          padding: '1.5rem',
          borderRadius: '8px',
          border: '2px solid #ffc107',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ color: '#ffc107', marginBottom: '1rem' }}>🚧 学习中</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '0.5rem', color: '#6c757d' }}>
              🖱️ 事件处理
            </li>
          </ul>
        </div>

        <div style={{ 
          backgroundColor: 'white',
          padding: '1.5rem',
          borderRadius: '8px',
          border: '2px solid #6c757d',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ color: '#6c757d', marginBottom: '1rem' }}>📋 待学习</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '0.5rem', color: '#6c757d' }}>
              🔀 条件渲染
            </li>
            <li style={{ marginBottom: '0.5rem', color: '#6c757d' }}>
              📋 列表渲染
            </li>
            <li style={{ marginBottom: '0.5rem', color: '#6c757d' }}>
              🎨 样式化
            </li>
            <li style={{ marginBottom: '0.5rem', color: '#6c757d' }}>
              🔗 路由系统
            </li>
            <li style={{ color: '#6c757d' }}>
              📦 更多高级概念...
            </li>
          </ul>
        </div>
      </div>

      <div style={{ 
        textAlign: 'center',
        backgroundColor: '#e3f2fd',
        padding: '2rem',
        borderRadius: '12px',
        border: '2px solid #2196f3'
      }}>
        <h2 style={{ color: '#1976d2', marginBottom: '1rem' }}>🚀 开始学习</h2>
        <p style={{ marginBottom: '1.5rem', color: '#424242' }}>
          准备好开始你的 React 学习之旅了吗？点击上方导航栏中的任何部分开始学习！
        </p>
        <Link 
          to="/events" 
          style={{
            display: 'inline-block',
            padding: '1rem 2rem',
            backgroundColor: '#2196f3',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            transition: 'background-color 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#1976d2';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#2196f3';
          }}
        >
          继续学习：事件处理 →
        </Link>
      </div>
    </div>
  );
};

export default HomePage; 
import React from 'react';
import { Link } from 'react-router-dom';
import StateDemo from '../components/StateDemo';
import EffectDemo from '../components/EffectDemo';

const StateLifecyclePage: React.FC = () => {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#333' }}>
          🔄 状态和生命周期
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#666' }}>
          第三部分：掌握 React 的状态管理和生命周期概念
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
          恭喜！你已经掌握了 useState 和 useEffect 这两个最重要的 React Hooks。
        </p>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#495057', borderBottom: '2px solid #dee2e6', paddingBottom: '0.5rem' }}>
          📚 关键概念总结
        </h2>
        
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
          marginTop: '1rem'
        }}>
          <div style={{ 
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '8px',
            border: '2px solid #007bff'
          }}>
            <h3 style={{ color: '#007bff', marginBottom: '1rem' }}>useState Hook</h3>
            <ul style={{ color: '#6c757d', fontSize: '0.9rem' }}>
              <li>管理组件的局部状态</li>
              <li>支持不同数据类型（数字、字符串、布尔、对象、数组）</li>
              <li>状态更新会触发组件重新渲染</li>
              <li>使用函数式更新避免状态依赖问题</li>
            </ul>
          </div>
          
          <div style={{ 
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '8px',
            border: '2px solid #28a745'
          }}>
            <h3 style={{ color: '#28a745', marginBottom: '1rem' }}>useEffect Hook</h3>
            <ul style={{ color: '#6c757d', fontSize: '0.9rem' }}>
              <li>处理副作用（API 调用、事件监听、定时器等）</li>
              <li>通过依赖数组控制执行时机</li>
              <li>返回清理函数防止内存泄漏</li>
              <li>模拟组件的生命周期行为</li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#495057', borderBottom: '2px solid #dee2e6', paddingBottom: '0.5rem' }}>
          🎯 互动演示组件
        </h2>
        <p style={{ color: '#6c757d', marginBottom: '1rem' }}>
          💡 提示：打开浏览器开发者工具的控制台，观察 useEffect 的执行日志
        </p>
      </div>

      {/* useState 演示组件 */}
      <StateDemo />
      
      {/* useEffect 演示组件 */}
      <EffectDemo />

      <div style={{ 
        textAlign: 'center',
        backgroundColor: '#f8f9fa',
        padding: '2rem',
        borderRadius: '8px',
        border: '2px solid #dee2e6',
        marginTop: '2rem'
      }}>
        <h3 style={{ color: '#495057', marginBottom: '1rem' }}>继续学习之旅</h3>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link 
            to="/events"
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#28a745',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '6px',
              fontSize: '1rem'
            }}
          >
            下一步：事件处理 →
          </Link>
          <Link 
            to="/jsx-components"
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#6c757d',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '6px',
              fontSize: '1rem'
            }}
          >
            ← 上一步：JSX 和组件
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

export default StateLifecyclePage; 
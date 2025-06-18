import React from 'react';
import { Link } from 'react-router-dom';
import ConditionalDemo from '../components/ConditionalDemo';

const ConditionalRenderingPage: React.FC = () => {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#333' }}>
          🔀 条件渲染
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#666' }}>
          第五部分：学习根据条件动态显示不同的 UI 内容
        </p>
      </div>

      <div style={{ 
        backgroundColor: '#fff3cd', 
        padding: '1.5rem', 
        borderRadius: '8px',
        marginBottom: '2rem',
        border: '2px solid #ffc107'
      }}>
        <h2 style={{ color: '#856404', marginBottom: '1rem' }}>🚧 正在学习</h2>
        <p style={{ color: '#856404', margin: 0 }}>
          你正在学习 React 中的条件渲染！通过下面的演示组件来理解如何根据不同条件显示不同内容。
        </p>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#495057', borderBottom: '2px solid #dee2e6', paddingBottom: '0.5rem' }}>
          📚 学习目标
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
            border: '2px solid #007bff'
          }}>
            <h3 style={{ color: '#007bff', marginBottom: '1rem' }}>逻辑与 (&&)</h3>
            <ul style={{ color: '#6c757d', fontSize: '0.9rem', margin: 0 }}>
              <li>简单的显示/隐藏逻辑</li>
              <li>布尔值控制渲染</li>
              <li>最常用的条件渲染方式</li>
            </ul>
          </div>
          
          <div style={{ 
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '8px',
            border: '2px solid #28a745'
          }}>
            <h3 style={{ color: '#28a745', marginBottom: '1rem' }}>三元运算符</h3>
            <ul style={{ color: '#6c757d', fontSize: '0.9rem', margin: 0 }}>
              <li>二选一的显示逻辑</li>
              <li>A 或 B 的选择渲染</li>
              <li>内联条件表达式</li>
            </ul>
          </div>

          <div style={{ 
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '8px',
            border: '2px solid #ffc107'
          }}>
            <h3 style={{ color: '#ffc107', marginBottom: '1rem' }}>多条件渲染</h3>
            <ul style={{ color: '#6c757d', fontSize: '0.9rem', margin: 0 }}>
              <li>复杂的判断逻辑</li>
              <li>多种状态处理</li>
              <li>角色权限控制</li>
            </ul>
          </div>

                     <div style={{ 
             backgroundColor: 'white',
             padding: '1.5rem',
             borderRadius: '8px',
             border: '2px solid #6f42c1'
           }}>
             <h3 style={{ color: '#6f42c1', marginBottom: '1rem' }}>动态样式</h3>
            <ul style={{ color: '#6c757d', fontSize: '0.9rem', margin: 0 }}>
              <li>根据状态改变样式</li>
              <li>条件性 CSS 类</li>
              <li>动态主题切换</li>
            </ul>
          </div>

                     <div style={{ 
             backgroundColor: 'white',
             padding: '1.5rem',
             borderRadius: '8px',
             border: '2px solid #dc3545'
           }}>
             <h3 style={{ color: '#dc3545', marginBottom: '1rem' }}>实战应用</h3>
            <ul style={{ color: '#6c757d', fontSize: '0.9rem', margin: 0 }}>
              <li>登录状态管理</li>
              <li>购物车状态显示</li>
              <li>消息提示系统</li>
            </ul>
          </div>

                     <div style={{ 
             backgroundColor: 'white',
             padding: '1.5rem',
             borderRadius: '8px',
             border: '2px solid #17a2b8'
           }}>
             <h3 style={{ color: '#17a2b8', marginBottom: '1rem' }}>加载状态</h3>
            <ul style={{ color: '#6c757d', fontSize: '0.9rem', margin: 0 }}>
              <li>Loading 状态处理</li>
              <li>数据加载显示</li>
              <li>异步操作反馈</li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#495057', borderBottom: '2px solid #dee2e6', paddingBottom: '0.5rem' }}>
          🎯 核心概念
        </h2>
        
        <div style={{ 
          backgroundColor: 'white',
          padding: '1.5rem',
          borderRadius: '8px',
          border: '2px solid #e9ecef',
          marginTop: '1rem'
        }}>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem'
          }}>
            <div>
              <h4 style={{ color: '#007bff', marginBottom: '0.5rem' }}>JSX 中的 JavaScript</h4>
              <p style={{ fontSize: '0.9rem', color: '#6c757d', margin: 0 }}>
                在 JSX 中使用 JavaScript 表达式来控制渲染逻辑
              </p>
            </div>
            
            <div>
              <h4 style={{ color: '#007bff', marginBottom: '0.5rem' }}>真假值判断</h4>
              <p style={{ fontSize: '0.9rem', color: '#6c757d', margin: 0 }}>
                React 会根据 JavaScript 的真假值来决定是否渲染元素
              </p>
            </div>
            
            <div>
              <h4 style={{ color: '#007bff', marginBottom: '0.5rem' }}>组件组合</h4>
              <p style={{ fontSize: '0.9rem', color: '#6c757d', margin: 0 }}>
                通过条件渲染实现组件的动态组合和布局
              </p>
            </div>
            
            <div>
              <h4 style={{ color: '#007bff', marginBottom: '0.5rem' }}>用户体验</h4>
              <p style={{ fontSize: '0.9rem', color: '#6c757d', margin: 0 }}>
                根据用户状态和操作提供个性化的界面体验
              </p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#495057', borderBottom: '2px solid #dee2e6', paddingBottom: '0.5rem' }}>
          🎮 互动演示
        </h2>
        <p style={{ color: '#6c757d', marginBottom: '1rem' }}>
          💡 提示：尝试与下面的所有演示组件交互，观察不同条件下的渲染效果
        </p>
      </div>

      {/* 条件渲染演示组件 */}
      <ConditionalDemo />

      <div style={{ 
        textAlign: 'center',
        backgroundColor: '#f8f9fa',
        padding: '2rem',
        borderRadius: '8px',
        border: '2px solid #dee2e6',
        marginTop: '2rem'
      }}>
        <h3 style={{ color: '#495057', marginBottom: '1rem' }}>🎉 学习完成！</h3>
        <p style={{ color: '#6c757d', marginBottom: '1.5rem' }}>
          恭喜！你已经掌握了 React 中的条件渲染。现在你可以：
        </p>
        <ul style={{ 
          textAlign: 'left', 
          display: 'inline-block',
          color: '#6c757d',
          marginBottom: '1.5rem'
        }}>
          <li>使用逻辑与 (&&) 进行简单的条件渲染</li>
          <li>使用三元运算符处理二选一的显示逻辑</li>
          <li>处理复杂的多条件渲染场景</li>
          <li>根据状态动态改变界面和样式</li>
        </ul>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link 
            to="/lists"
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#28a745',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '6px',
              fontSize: '1rem'
            }}
          >
            下一步：列表渲染 →
          </Link>
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
            ← 上一步：事件处理
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
import React from 'react';
import { Link } from 'react-router-dom';
import EventsDemo from '../components/EventsDemo';

const EventsPage: React.FC = () => {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#333' }}>
          🖱️ 事件处理
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#666' }}>
          第四部分：学习如何响应用户交互和处理各种事件
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
          你正在学习 React 中的事件处理！通过下面的演示组件来实践各种用户交互。
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
            <h3 style={{ color: '#007bff', marginBottom: '1rem' }}>点击事件</h3>
            <ul style={{ color: '#6c757d', fontSize: '0.9rem', margin: 0 }}>
              <li>onClick 单击事件</li>
              <li>onDoubleClick 双击事件</li>
              <li>按钮交互和状态更新</li>
            </ul>
          </div>
          
          <div style={{ 
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '8px',
            border: '2px solid #28a745'
          }}>
            <h3 style={{ color: '#28a745', marginBottom: '1rem' }}>输入事件</h3>
            <ul style={{ color: '#6c757d', fontSize: '0.9rem', margin: 0 }}>
              <li>onChange 输入变化</li>
              <li>受控组件概念</li>
              <li>实时数据同步</li>
            </ul>
          </div>

          <div style={{ 
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '8px',
            border: '2px solid #ffc107'
          }}>
            <h3 style={{ color: '#ffc107', marginBottom: '1rem' }}>鼠标事件</h3>
            <ul style={{ color: '#6c757d', fontSize: '0.9rem', margin: 0 }}>
              <li>onMouseMove 鼠标移动</li>
              <li>坐标获取</li>
              <li>动态交互</li>
            </ul>
          </div>

          <div style={{ 
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '8px',
            border: '2px solid #6f42c1'
          }}>
            <h3 style={{ color: '#6f42c1', marginBottom: '1rem' }}>表单事件</h3>
            <ul style={{ color: '#6c757d', fontSize: '0.9rem', margin: 0 }}>
              <li>onSubmit 表单提交</li>
              <li>preventDefault() 阻止默认行为</li>
              <li>表单验证</li>
            </ul>
          </div>

          <div style={{ 
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '8px',
            border: '2px solid #dc3545'
          }}>
            <h3 style={{ color: '#dc3545', marginBottom: '1rem' }}>综合应用</h3>
            <ul style={{ color: '#6c757d', fontSize: '0.9rem', margin: 0 }}>
              <li>Todo 列表实战</li>
              <li>多种事件组合</li>
              <li>状态管理实践</li>
            </ul>
          </div>

          <div style={{ 
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '8px',
            border: '2px solid #17a2b8'
          }}>
            <h3 style={{ color: '#17a2b8', marginBottom: '1rem' }}>高级事件</h3>
            <ul style={{ color: '#6c757d', fontSize: '0.9rem', margin: 0 }}>
              <li>onKeyDown 键盘事件</li>
              <li>onFocus/onBlur 焦点事件</li>
              <li>useRef Hook 应用</li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#495057', borderBottom: '2px solid #dee2e6', paddingBottom: '0.5rem' }}>
          🎯 重要概念
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
              <h4 style={{ color: '#007bff', marginBottom: '0.5rem' }}>合成事件 (SyntheticEvent)</h4>
              <p style={{ fontSize: '0.9rem', color: '#6c757d', margin: 0 }}>
                React 提供跨浏览器兼容的事件包装器，统一了不同浏览器的事件处理
              </p>
            </div>
            
            <div>
              <h4 style={{ color: '#007bff', marginBottom: '0.5rem' }}>事件对象 (Event Object)</h4>
              <p style={{ fontSize: '0.9rem', color: '#6c757d', margin: 0 }}>
                包含事件信息的对象，如 target、value、key、preventDefault 等
              </p>
            </div>
            
            <div>
              <h4 style={{ color: '#007bff', marginBottom: '0.5rem' }}>受控组件</h4>
              <p style={{ fontSize: '0.9rem', color: '#6c757d', margin: 0 }}>
                表单元素的值由 React 状态控制，通过 onChange 事件更新状态
              </p>
            </div>
            
            <div>
              <h4 style={{ color: '#007bff', marginBottom: '0.5rem' }}>事件委托</h4>
              <p style={{ fontSize: '0.9rem', color: '#6c757d', margin: 0 }}>
                React 在根元素上监听所有事件，通过冒泡机制处理子元素事件
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
          💡 提示：尝试与下面的所有演示组件交互，观察状态变化和事件处理
        </p>
      </div>

      {/* 事件演示组件 */}
      <EventsDemo />

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
          恭喜！你已经掌握了 React 中的事件处理。现在你可以：
        </p>
        <ul style={{ 
          textAlign: 'left', 
          display: 'inline-block',
          color: '#6c757d',
          marginBottom: '1.5rem'
        }}>
          <li>处理各种用户交互事件</li>
          <li>创建受控组件和表单</li>
          <li>使用 useRef 直接操作 DOM</li>
          <li>构建复杂的交互式界面</li>
        </ul>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link 
            to="/conditional-rendering"
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#28a745',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '6px',
              fontSize: '1rem'
            }}
          >
            下一步：条件渲染 →
          </Link>
          <Link 
            to="/state-lifecycle"
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#6c757d',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '6px',
              fontSize: '1rem'
            }}
          >
            ← 上一步：状态和生命周期
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

export default EventsPage; 
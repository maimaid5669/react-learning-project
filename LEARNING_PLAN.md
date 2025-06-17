# React 前端学习实践计划

你好！欢迎来到前端开发的世界。这份计划将引导你从零开始，逐步掌握使用 React 构建现代化 Web 应用所需的各项技能。

本计划被设计成一个可追踪的待办事项列表。当你完成一个步骤后，可以在对应的复选框中打上标记 (`[x]`)。

## 第一部分：React 基础

- [x] **1. 理解项目结构**:
    - [x] 浏览由 Vite 创建的项目文件，理解 `src`, `public`, `index.html`, `package.json`, `vite.config.ts` 等文件和目录的核心作用。
    - [x] 了解 `main.tsx` 是如何将 `App` 组件渲染到 `index.html` 中的 `div#root` 元素的。

- [x] **2. JSX 和组件 (Components)**:
    - [x] 学习 JSX 语法，它允许你在 JavaScript 中编写类似 HTML 的代码。
    - [x] 创建你的第一个函数式组件 (`Functional Component`)。
    - [x] 学习如何通过 `props` 将数据从父组件传递到子组件。

- [x] **3. 状态 (State) 和生命周期 (Lifecycle)**:
    - [x] 引入 `useState` Hook 来在组件中管理局部状态。
    - [x] 学习 `useEffect` Hook 来处理副作用，例如：在组件挂载后获取数据或设置订阅。

- [x] **4. 处理事件 (Handling Events)**:
    - [x] 学习如何响应用户交互，例如点击按钮 (`onClick`) 和表单输入 (`onChange`)。

- [ ] **5. 条件渲染 (Conditional Rendering)**:
    - [ ] 学习如何根据组件的状态或属性来动态地显示或隐藏部分 UI。可以使用 `if/else`、三元运算符或逻辑与 `&&` 运算符。

- [ ] **6. 渲染列表 (Lists and Keys)**:
    - [ ] 学习如何使用 `.map()` 方法来渲染一个数据数组到组件列表。
    - [ ] 理解为什么需要为列表中的每一项提供一个唯一的 `key` 属性，以及它对性能的重要性。

## 第二部分：样式化 React 应用

- [ ] **1. CSS 基础**:
    - [ ] 学习如何使用普通的 CSS 文件 (`App.css`) 来为组件添加样式。
    - [ ] 理解 CSS 模块 (`.module.css`)，它如何帮助我们避免样式冲突。

- [ ] **2. (可选) Utility-First CSS - Tailwind CSS**:
    - [ ] 了解什么是 Utility-First CSS 及其优势。
    - [ ] 在项目中安装和配置 Tailwind CSS。
    - [ ] 使用 Tailwind 的功能类来快速构建界面。

- [ ] **3. (可选) CSS-in-JS - Emotion**:
    - [ ] 了解 CSS-in-JS 的概念。
    - [ ] 在项目中安装 Emotion。
    - [ ] 学习如何使用 `styled` API 创建带有样式的组件。

## 第三部分：高级 React 概念

- [ ] **1. React Hooks 深入**:
    - [ ] `useContext`: 用于在组件树中深层传递数据，避免 "prop drilling"。
    - [ ] `useReducer`: 当状态逻辑变得复杂时，作为 `useState` 的替代方案。
    - [ ] `useCallback` 和 `useMemo`: 用于性能优化，分别用于记忆化函数和记忆化值。
    - [ ] `useRef`: 用于访问 DOM 节点或在多次渲染之间保持一个可变值。

- [ ] **2. 创建自定义 Hooks (Custom Hooks)**:
    - [ ] 学习如何将组件逻辑提取到可重用的自定义 Hook 中，以实现逻辑共享。

- [ ] **3. 表单处理**:
    - [ ] 理解"受控组件"和"非受控组件"的区别。
    - [ ] (推荐) 学习使用像 `React Hook Form` 这样的库来简化复杂的表单处理和验证。

## 第四部分：路由

- [ ] **1. React Router**:
    - [ ] 在项目中安装 `react-router-dom`。
    - [ ] 配置 `BrowserRouter` 和 `Routes`，创建你的第一个路由 (`Route`)。
    - [ ] 学习如何使用 `Link` 组件在页面之间导航，以及如何使用 `useNavigate` Hook 进行编程式导航。
    - [ ] 实现动态路由（例如 `/users/:userId`）和嵌套路由。

## 第五部分：全局状态管理

- [ ] **1. 状态管理简介**:
    - [ ] 理解什么是"Prop Drilling"（属性逐层传递）以及为什么需要全局状态管理。

- [ ] **2. (可选) Zustand**:
    - [ ] 在项目中安装 `zustand`。
    - [ ] 创建一个 `store` 来存放全局状态。
    - [ ] 在组件中连接 `store` 并使用/更新状态。Zustand 是一个比 Redux 更轻量、更简单的选择。

- [ ] **3. (可选) Redux Toolkit**:
    - [ ] 了解 Redux 的核心概念（actions, reducers, store）。
    - [ ] 使用 Redux Toolkit 来简化 Redux 的配置和使用。

## 第六部分：与后端 API 交互

- [ ] **1. 数据获取**:
    - [ ] 使用浏览器内置的 `fetch` API 在 `useEffect` 中获取数据。
    - [ ] 学习处理数据加载 (`loading`) 和错误 (`error`) 状态。
    - [ ] (可选) 使用 `axios` 库作为 `fetch` 的替代方案。

- [ ] **2. (推荐) 使用 TanStack Query (原 React Query)**:
    - [ ] 在项目中安装 `@tanstack/react-query`。
    - [ ] 使用 `useQuery` 来简化数据获取、缓存、同步和更新的逻辑。
    - [ ] 学习使用 `useMutation` 来处理创建、更新和删除数据的操作。

## 第七部分：测试

- [ ] **1. 测试简介**:
    - [ ] 了解单元测试、集成测试和端到端测试的基本概念。

- [ ] **2. Vitest 和 React Testing Library**:
    - [ ] Vite 项目天然集成了 Vitest，学习如何编写你的第一个单元测试。
    - [ ] 使用 React Testing Library 来测试组件的行为，模拟用户交互并断言结果。

## 第八部分：构建和部署

- [ ] **1. 项目构建**:
    - [ ] 运行 `pnpm run build` (或 `npm run build`) 命令，并理解 `dist` 目录中生成的优化后的静态文件。

- [ ] **2. 部署**:
    - [ ] 学习如何将你的静态应用部署到免费的托管平台，例如 Vercel, Netlify 或 GitHub Pages。

## 第九部分：工具和最佳实践

- [ ] **1. 代码格式化与检查**:
    - [ ] 安装和配置 Prettier，以确保整个项目代码风格一致。
    - [ ] 理解并配置 ESLint 规则，以发现并修复代码中的问题。

- [ ] **2. TypeScript 深入**:
    - [ ] 为函数、props 和 state 定义更精确的类型。
    - [ ] 学习使用接口 (`interface`) 和类型别名 (`type`)。

- [ ] **3. 项目结构**:
    - [ ] 随着项目变大，学习如何组织你的文件和目录，例如按功能（feature）或按类型（component, page, hook）组织。

祝你学习愉快！ 
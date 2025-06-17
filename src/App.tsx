import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import JSXComponentsPage from './pages/JSXComponentsPage'
import StateLifecyclePage from './pages/StateLifecyclePage'
import EventsPage from './pages/EventsPage'
import ConditionalRenderingPage from './pages/ConditionalRenderingPage'
import ListsPage from './pages/ListsPage'

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/jsx-components" element={<JSXComponentsPage />} />
          <Route path="/state-lifecycle" element={<StateLifecyclePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/conditional-rendering" element={<ConditionalRenderingPage />} />
          <Route path="/lists" element={<ListsPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

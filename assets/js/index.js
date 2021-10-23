import React from 'react'
import { render } from 'preact'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import ScrollToTop from './ScrollToTop'

export default function Index() {
  return (
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  )
}

render(<Index />, document.getElementById('root'))

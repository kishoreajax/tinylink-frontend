import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'            // base reset
import './styles/main.css'    // ← main UI styling (must be LAST)
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

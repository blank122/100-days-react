import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Day01Activity from './Day01Activity.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Day01Activity />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { LazyMotion, domAnimation } from 'framer-motion'
import AppRouter from './app/AppRouter'
import './styles/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LazyMotion features={domAnimation} strict>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </LazyMotion>
  </StrictMode>,
)

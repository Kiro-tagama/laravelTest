import React from 'react'
import ReactDOM from 'react-dom/client'

import "@picocss/pico"
import './styles.css'

import { BrowserRouter } from 'react-router-dom'
import {Router} from './Router.tsx'
import { ContextProvider } from './context/Context.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContextProvider>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>,
)

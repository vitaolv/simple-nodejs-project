import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { HeaderComponent } from './components/Header.tsx'
import { FooterComponent } from './components/Footer.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <App />
    <FooterComponent />
  </React.StrictMode>,
)

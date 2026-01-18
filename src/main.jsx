import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Entrada.jsx'
import './index.css'

// 1. ADICIONE ESTA LINHA (Importar o roteador)
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
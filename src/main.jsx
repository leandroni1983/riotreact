import React from 'react'
import ReactDOM from 'react-dom/client'
import { SummonerProvider } from './components/context'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SummonerProvider>
      <App />
    </SummonerProvider>
  </React.StrictMode>,
)

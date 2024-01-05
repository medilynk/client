import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { AuthContextProvider } from './context/AuthContext.jsx'
import App from './App.jsx'
import toast, { Toaster } from 'react-hot-toast';
import { AuthProviderToken } from './context/TokenContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <AuthProviderToken>
    <App/>
    <Toaster />
    </AuthProviderToken>

    </AuthContextProvider>
  </React.StrictMode>,
)

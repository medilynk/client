import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Landing from './pages/Landing.jsx'
import Doctor from './pages/Doctor.jsx'
import Admin from './pages/Admin.jsx'

const routes = [
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '',
        element: <Landing/>,
      },
      {
        path: 'admin',
        element: <Admin/>
      },
      {
        path: 'doctor',
        element: <Doctor/>,
      },
      
    ],
  },
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
    <RouterProvider router={router}/>
    </AuthContextProvider>
  </React.StrictMode>,
)

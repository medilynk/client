import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import SigninForm from './components/SigninForm.jsx'
import Layout from './Layout.jsx'

const routes = [
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '',
        element: <SigninForm/>,
      }
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

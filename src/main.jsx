import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router'
import Authprovider from './Provider/Authprovider'
import { ToastContainer } from 'react-toastify'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer />
    </Authprovider>
      
  </React.StrictMode>,
)

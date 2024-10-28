import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login/Login.jsx'


const router = createBrowserRouter([
  {

    path: '/',
    element: <App/>,
    errorElement: <div className='text-red-500'>Loading...</div>,
   children: [
    {
      path:'/',
      element: <Login/>
    }
   ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>,
)

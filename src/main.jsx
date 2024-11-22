import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { NextUIProvider } from '@nextui-org/react'
import MainLayout from './layout/MainLayout.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './router/Router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}>
  <NextUIProvider> <MainLayout></MainLayout></NextUIProvider>
  </RouterProvider>
  </StrictMode>,
)

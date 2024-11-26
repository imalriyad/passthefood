import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { NextUIProvider } from '@nextui-org/react'
import MainLayout from './layout/MainLayout.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './router/Router.jsx'
import ContextProvider from './context/ContextProvider.jsx'
import { Auth0Provider } from "@auth0/auth0-react";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-1zfeq17xi4cvbmxg.us.auth0.com"
      clientId="8xH2car7xrS3YNsmlRGpnrHqPFYjf91I"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <ContextProvider>
        <RouterProvider router={router}>
          <NextUIProvider>
            {" "}
            <MainLayout></MainLayout>
          </NextUIProvider>
        </RouterProvider>
      </ContextProvider>
    </Auth0Provider>
  </StrictMode>
);

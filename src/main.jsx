import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import MainLayout from "./layout/MainLayout.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./router/Router.jsx";
import ContextProvider from "./context/ContextProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}>
          <NextUIProvider>
            <MainLayout></MainLayout>
          </NextUIProvider>
        </RouterProvider>
      </QueryClientProvider>
    </ContextProvider>
  </StrictMode>
);

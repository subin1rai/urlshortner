import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './routing/routeTree.js';
import store from "./store/store.js";
import { Provider } from "react-redux";

const queryClient = new QueryClient();

const router = createRouter({ 
  routeTree,
  context: {
    queryClient,
    store
  }
});

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>    
    </QueryClientProvider>
  </Provider>
);
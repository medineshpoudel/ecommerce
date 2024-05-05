import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "../app/store";
import App from "./App.tsx";
import "./index.css";
import { HashRouter } from "react-router-dom";
import ModalProvider from "./context/ModalProvider";

// Create a client
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <HashRouter>
          <ModalProvider>
            <App />
          </ModalProvider>
        </HashRouter>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// product provider
import ProductProvider from "./contexts/ProductContext.tsx";
// sidebar provider
import SidebarProvider from "./contexts/SidebarContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ProductProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ProductProvider>
);

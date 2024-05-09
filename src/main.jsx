import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./app/store.js";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Toaster />
    <App />
  </Provider>
);

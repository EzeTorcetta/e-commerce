//?---------------------------- IMPORTS --------------------------------
//react
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
//redux
import store from "./redux/store.js";
//archivos
import App from "./App.jsx";

//css
import "./index.css";


//?----------------- APP ------------------------------------

axios.defaults.baseURL = "https://localhost:3001";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

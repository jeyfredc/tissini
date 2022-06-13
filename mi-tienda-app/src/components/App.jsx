import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../components/containers/Login";
import { Provider } from "react-redux";
import { store } from "../store/store";
import "../styles/globals.css";
import 'primeicons/primeicons.css';
import { CookiesProvider } from 'react-cookie';
import Categories from "./containers/Categories";
const App = () => {
  return (
    <CookiesProvider>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="categorias" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </Provider>
    </CookiesProvider>
  );
};

export default App;

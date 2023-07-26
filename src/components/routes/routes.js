import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../Login/login";
import { Home } from "../Home/home";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        {/* Adicione mais rotas aqui, se necessário */}
      </Routes>
    </BrowserRouter>
  );
};

import React from "react";
import ReactDOM from "react-dom/client";
import "./Global.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./pages/Details";
import Popular from "./pages/Popular";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/popular" element={<Popular />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

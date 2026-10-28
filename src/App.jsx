
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header.jsx";

import Hero from "./Components/Hero/Hero.jsx";

import Login from "./Pages/Login.jsx";

import Register from "./Pages/Register.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

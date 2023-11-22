import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import Dashboard from "../pages/Dashboard/Dashboard";
import Equipes from "../pages/Equipes/Equipes";
import Descontos from "./../pages/Descontos/Descontos";
import Eventos from "../pages/Eventos/Eventos";
import Galeria from "../pages/Galeria/Galeria";
import Navbar from "../components/Navbar/Navbar";
import { useState } from "react";

const AppRoutes = () => {
  const [exibeNavbar, setExibeNavbar] = useState(false);
  return (
    <BrowserRouter>
      <Header exibeNavbar={exibeNavbar} setExibeNavbar={setExibeNavbar} />
      <Navbar exibeNavbar={exibeNavbar} setExibeNavbar={setExibeNavbar} />
      <Routes>
        <Route element={<Dashboard />} path="/" />
        <Route element={<Equipes />} path="/equipes" />
        <Route element={<Descontos />} path="/descontos" />
        <Route element={<Eventos />} path="/eventos" />
        <Route element={<Galeria />} path="/galeria" />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;

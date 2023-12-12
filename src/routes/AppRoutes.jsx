import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import Dashboard from "../pages/Dashboard/Dashboard";
import Equipe from "../pages/Equipe/Equipe";
import Descontos from "./../pages/Descontos/Descontos";
import Eventos from "../pages/Eventos/Eventos";
import Galeria from "../pages/Galeria/Galeria";
import Navbar from "../components/Navbar/Navbar";
import { useState } from "react";
import DetalhesMembro from "../pages/Equipe/DetalhesMembro/DetalhesMembro";

const AppRoutes = () => {
  const [exibeNavbar, setExibeNavbar] = useState(false);
  return (
    <BrowserRouter>
      <Header exibeNavbar={exibeNavbar} setExibeNavbar={setExibeNavbar} />
      <Navbar exibeNavbar={exibeNavbar} setExibeNavbar={setExibeNavbar} />
      <Routes>
        <Route element={<Dashboard />} path="/" />
        <Route element={<Equipe />} path="/equipes" />
        <Route element={<Descontos />} path="/descontos" />
        <Route element={<Eventos />} path="/eventos" />
        <Route element={<Galeria />} path="/galeria" />
        <Route element={<DetalhesMembro />} path="/detalhes-membro/" />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;

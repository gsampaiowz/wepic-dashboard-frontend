import { useEffect, useState } from "react";
import "./Navbar.css";
import { RxDashboard } from "react-icons/rx";
import { GoPeople } from "react-icons/go";
import { MdOutlineDiscount } from "react-icons/md";
import { HiOutlinePhotograph } from "react-icons/hi";
import { GoPaperclip } from "react-icons/go";
import { NavLink, Link } from "react-router-dom";

const Navbar = ({ setExibeNavbar, exibeNavbar }) => {
  return (
    <>
      <span className={exibeNavbar ? "main-background-blur" : ""}></span>
      <aside>
        <nav className={`navbar ${exibeNavbar ? "exibeNavbar" : ""}`}>
          <span onClick={() => setExibeNavbar(false)} className="navbar__close">
            x
          </span>
          <div className="navbar-flex">
            <NavLink as={Link} to="/">
              <RxDashboard size={22} /> Dashboard
            </NavLink>
            <NavLink to="/equipes">
              <GoPeople size={22} />
              Equipes
            </NavLink>
            <NavLink to="/galeria">
              <HiOutlinePhotograph size={22} />
              Galeria
            </NavLink>
            <NavLink to="/descontos">
              <MdOutlineDiscount size={22} />
              Descontos
            </NavLink>
            <NavLink to="/eventos">
              <GoPaperclip size={22} />
              Eventos
            </NavLink>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Navbar;

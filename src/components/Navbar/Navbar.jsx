import { useEffect, useState } from "react";
import "./Navbar.css";
import { RxDashboard } from "react-icons/rx";
import { GoPeople } from "react-icons/go";
import { MdOutlineDiscount } from "react-icons/md";
import { HiOutlinePhotograph } from "react-icons/hi";
import { GoPaperclip } from "react-icons/go";
import { NavLink } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

const Navbar = ({ setExibeNavbar, exibeNavbar }) => {
  return (
    <>
      <span className={exibeNavbar ? "main-background-blur" : ""}></span>
      <aside>
        <nav className={`navbar ${exibeNavbar ? "exibeNavbar" : ""}`}>
          <IoMdClose onClick={() => setExibeNavbar(false)} size={35} color="white" className="navbar__close"/>
          <div className="navbar-flex">
            <NavLink className={"nav-link"}  to="/">
              <RxDashboard size={22} /> Dashboard
            </NavLink>
            <NavLink className={"nav-link"} to="/equipes">
              <GoPeople size={22} />
              Equipes
            </NavLink>
            <NavLink className={"nav-link"} to="/galeria">
              <HiOutlinePhotograph size={22} />
              Galeria
            </NavLink>
            <NavLink className={"nav-link"} to="/descontos">
              <MdOutlineDiscount size={22} />
              Descontos
            </NavLink>
            <NavLink className={"nav-link"} to="/eventos">
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

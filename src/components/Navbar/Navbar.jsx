import { useEffect, useState } from "react";
import "./Navbar.css";
import { RxDashboard } from "react-icons/rx";
import { GoPeople } from "react-icons/go";
import { MdOutlineDiscount } from "react-icons/md";
import { HiOutlinePhotograph } from "react-icons/hi";
import { GoPaperclip } from "react-icons/go";
import { Link } from "react-router-dom";

const Navbar = ({ setExibeNavbar, exibeNavbar }) => {
  const [route, setRoute] = useState("");
  const path = window.location.pathname;

  useEffect(() => {
    path === "/" && setRoute("Dashboard");
    path === "/equipes" && setRoute("Equipes");
    path === "/galeria" && setRoute("Galeria");
    path === "/descontos" && setRoute("Descontos");
    path === "/eventos" && setRoute("Eventos");
  }, [route]);

  return (
    <>
      <span className={exibeNavbar ? "main-background-blur" : ""}></span>
      <aside>
        <nav className={`navbar ${exibeNavbar ? "exibeNavbar" : ""}`}>
          <span onClick={() => setExibeNavbar(false)} className="navbar__close">
            x
          </span>
          <div className="navbar-flex">
            <Link
              to={"/"}
              className={`nav__link ${
                route === "Dashboard" ? "nav__link--onRoute" : ""
              }
          `}
              onClick={() => setRoute("Dashboard")}
            >
              <RxDashboard size={22} /> Dashboard
            </Link>
            <Link
              to={"/equipes"}
              className={`nav__link ${
                route === "Equipes" ? "nav__link--onRoute" : ""
              }
          `}
              onClick={() => setRoute("Equipes")}
            >
              <GoPeople size={22} />
              Equipes
            </Link>
            <Link
              to={"/galeria"}
              className={`nav__link ${
                route === "Galeria" ? "nav__link--onRoute" : ""
              }
          `}
              onClick={() => setRoute("Galeria")}
            >
              <HiOutlinePhotograph size={22} />
              Galeria
            </Link>
            <Link
              to={"/descontos"}
              className={`nav__link ${
                route === "Descontos" ? "nav__link--onRoute" : ""
              }
          `}
              onClick={() => setRoute("Descontos")}
            >
              <MdOutlineDiscount size={22} />
              Descontos
            </Link>
            <Link
              to={"/eventos"}
              className={`nav__link ${
                route === "Eventos" ? "nav__link--onRoute" : ""
              }
          `}
              onClick={() => setRoute("Eventos")}
            >
              <GoPaperclip size={22} />
              Eventos
            </Link>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Navbar;

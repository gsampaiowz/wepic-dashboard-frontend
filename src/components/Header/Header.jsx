import "./Header.css";

import { FaRegBell } from "react-icons/fa";
import { SlMenu } from "react-icons/sl";
import fotoPerfil from "../../assets/images/foto_perfil.jpg";

const Header = ({ exibeNavbar, setExibeNavbar }) => {
  return (
    <header className="header">
      <div className="header-flex">
        <FaRegBell size={25} />
        <img className="foto-perfil" src={fotoPerfil} alt="Foto de perfil" />
        <div className="info">
          <b>Matheus Richard</b>
          <small>Plano A</small>
        </div>
        <SlMenu className="header__menu__mobile" onClick={() => setExibeNavbar(true)} size={25} />
      </div>
    </header>
  );
};

export default Header;

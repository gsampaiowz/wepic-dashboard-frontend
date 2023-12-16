import "./Header.css";

import { FaRegBell } from "react-icons/fa";
import { SlMenu } from "react-icons/sl";
import fotoPerfil from "../../assets/images/foto_perfil.jpg";
import MyDropdown from "./../Dropdown/Dropdown";
import { notifications } from "../../datas/Datas";

const Header = ({ setExibeNavbar }) => {
  return (
    <header className="header">
      <div className="header-flex">
        <MyDropdown
          titulo={<FaRegBell size={25} />}
          downArrow={false}
          menuClass="menu-notification-dropdown"
        >
          {notifications.map((data, index) => (
            <div key={index} className="notification">
              <b>{data.title}</b>
              <small>{data.content}</small>
            </div>
          ))}
        </MyDropdown>
        <img className="foto-perfil" src={fotoPerfil} alt="Foto de perfil" />
        <div className="info">
          <b>Matheus Richard</b>
          <small>Plano A</small>
        </div>
        <SlMenu
          className="header__menu__mobile"
          onClick={() => setExibeNavbar(true)}
          size={25}
        />
      </div>
    </header>
  );
};

export default Header;

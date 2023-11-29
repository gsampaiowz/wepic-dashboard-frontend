import { Menu } from "@mui/base/Menu";
import { Dropdown } from "@mui/base/Dropdown";
import { MenuButton } from "@mui/base/MenuButton";
import { MenuItem } from "@mui/base/MenuItem";
import { FaAngleDown } from "react-icons/fa";
import "./Dropdown.css";

const MyDropdown = ({ titulo, array = [] }) => {
  return (
    <Dropdown>
      <MenuButton className="TriggerButtonSimple">{titulo} <FaAngleDown size={15} color="#575757"/></MenuButton>

      <Menu
        className="CustomMenuSimple"
        slotProps={{
          listbox: { className: "CustomMenuSimple--listbox" },
        }}
      >
        {array.map((item, index) => (
              <MenuItem className="CustomMenuIntroduction--item" key={index}>{item}</MenuItem>
            ))}
      </Menu>
    </Dropdown>
  );
};

export default MyDropdown;

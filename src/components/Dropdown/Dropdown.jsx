import { Menu } from "@mui/base/Menu";
import { Dropdown } from "@mui/base/Dropdown";
import { MenuButton } from "@mui/base/MenuButton";
import { FaAngleDown } from "react-icons/fa";
import "./Dropdown.css";

const MyDropdown = ({ titulo, children, iconColor }) => {
  return (
    <Dropdown>
      <MenuButton className="TriggerButtonSimple">
        <p style={{whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>{titulo}</p>
        <FaAngleDown style={{minWidth: 15}} size={15} color={iconColor} />
      </MenuButton>

      <Menu
        className="CustomMenuSimple"
        slotProps={{
          listbox: { className: "CustomMenuSimple--listbox" },
        }}
      >
       {children} 
      </Menu>
    </Dropdown>
  );
};

export default MyDropdown;

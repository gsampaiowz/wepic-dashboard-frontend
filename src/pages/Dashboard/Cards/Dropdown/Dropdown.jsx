import { Menu } from "@mui/base/Menu";
import { MenuItem } from "@mui/base/MenuItem";
import { MenuButton } from "@mui/base/MenuButton";
import { Dropdown } from "@mui/base/Dropdown";

const MyDropdown = () => {
  return (
    <Dropdown>
      <MenuButton className="TriggerButtonSimple">My account</MenuButton>

      <Menu
        className="CustomMenuSimple"
        slotProps={{
          listbox: { className: "CustomMenuSimple--listbox" },
        }}
      >
        <MenuItem className="CustomMenuSimple--item">Profile</MenuItem>
        <MenuItem className="CustomMenuSimple--item">
          Language settings
        </MenuItem>
        <MenuItem className="CustomMenuSimple--item">Log out</MenuItem>
      </Menu>
    </Dropdown>
  );
};

export default MyDropdown;

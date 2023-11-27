import CardTitle from "./CardTitle/CardTitle";
import "./Cards.css";
import { Menu } from "@mui/base/Menu";
import { MenuItem, menuItemClasses } from "@mui/base/MenuItem";
import { MenuButton } from "@mui/base/MenuButton";
import { Dropdown } from "@mui/base/Dropdown";

export const PriceCard = ({ icon, price, iconBackgroundColor }) => {
  return (
    <div className="card price-card">
      <span
        style={{ backgroundColor: iconBackgroundColor }}
        className="price-card__icon"
      >
        {icon}
      </span>
      <div className="price-card__texts">
        <small className="price-card__total">Total</small>
        <span className="price-card__preco">
          {price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>
    </div>
  );
};

export const ChartCard = ({ children }) => {
  return <div className="card chart-card">{children}</div>;
};

export const TableCard = () => {
  return (
    <div className="card">
      <div className="table-card__header">
        <CardTitle text="Processo de eventos" />
        <MenuSimple />
        <div className="table-card__dropdowns"></div>
      </div>
      <table></table>
    </div>
  );
};

export function MenuSimple() {
  const createHandleMenuClick = (menuItem) => {
    return () => {
      console.log(`Clicked on ${menuItem}`);
    };
  };

  return (
    <Dropdown>
      <MenuButton className="TriggerButtonSimple">My account</MenuButton>

      <Menu
        className="CustomMenuSimple"
        slotProps={{
          listbox: { className: "CustomMenuSimple--listbox" },
        }}
      >
        <MenuItem
          className="CustomMenuSimple--item"
          onClick={createHandleMenuClick("Profile")}
        >
          Profile
        </MenuItem>
        <MenuItem
          className="CustomMenuSimple--item"
          onClick={createHandleMenuClick("Language settings")}
        >
          Language settings
        </MenuItem>
        <MenuItem
          className="CustomMenuSimple--item"
          onClick={createHandleMenuClick("Log out")}
        >
          Log out
        </MenuItem>
      </Menu>
    </Dropdown>
  );
}

const cyan = {
  50: "#E9F8FC",
  100: "#BDEBF4",
  200: "#99D8E5",
  300: "#66BACC",
  400: "#1F94AD",
  500: "#0D5463",
  600: "#094855",
  700: "#063C47",
  800: "#043039",
  900: "#022127",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};
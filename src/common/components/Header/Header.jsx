import { NavLink } from "react-router";
import logo from "../../../assets/img/logo.png";
import s from "./Header.module.css";

export const Header = () => {
  const navLinkClass = ({ isActive }) =>
    isActive ? `${s.headerLink} ${s.active}` : s.headerLink;

  return (
    <div className={s.container}>
      <NavLink to="/">
        <img className={s.logo} src={logo} alt="logo" />
      </NavLink>

      <nav>
        <NavLink className={navLinkClass} to="/">
          Home
        </NavLink>
        <NavLink className={navLinkClass} to="/characters">
          Characters
        </NavLink>
        <NavLink className={navLinkClass} to="/locations">
          Locations
        </NavLink>
        <NavLink className={navLinkClass} to="/episodes">
          Episodes
        </NavLink>
      </nav>
    </div>
  );
};

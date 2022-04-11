import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import LoginContext from "../../context/login/LoginContext";

const Sidebar = () => {
  const{ getUserPermissions, userPermissions } = useContext(LoginContext);

  useEffect(() => {
    getUserPermissions();
  }, [userPermissions])
  
  // if(!userPermissions) return null;
  return (
    <nav className="container-item hide-sm" id="navbar">
      <ul className="menu">
        <li className="menu__item dashboard" id="">
          <NavLink className="menu__item-link menu__item-link_ico_dashboard" activeClassName="menu__item_state_active" to="/index">Dashboard</NavLink>
        </li>
        <li className="menu__item mails" id="29">
          <NavLink className="menu__item-link menu__item-link_ico_mails" activeClassName="menu__item_state_active" to="/documents">Mis documentos</NavLink>
        </li>
        <li className="menu__item users">
          <NavLink className="menu__item-link menu__item-link_ico_users" activeClassName="menu__item_state_active" to="/usuarios">Usuarios</NavLink>
        </li>
        <li className="menu__item announcements" id="31">
          <NavLink className="menu__item-link menu__item-link_ico_announcements" activeClassName="menu__item_state_active" to="/comunicados">Comunicados</NavLink>
        </li>
        <li className="menu__item docs" id="22">
          <NavLink className="menu__item-link menu__item-link_ico_docs" activeClassName="menu__item_state_active" to="/doclaboral">Doc. laborales</NavLink>
        </li>
        <li className="menu__item notifications">
          <NavLink className="menu__item-link menu__item-link_ico_notifications" activeClassName="menu__item_state_active" to="/notifications">Notificaciones</NavLink>
        </li>
        <li className="menu__item workflow" id="41">
          <NavLink className="menu__item-link menu__item-link_ico_workflow" activeClassName="menu__item_state_active" to="/workflow">Workflow</NavLink>
          <div className="menu__item-bage">15</div>
        </li>
        <li className="menu__item reports">
          <NavLink className="menu__item-link menu__item-link_ico_reports" activeClassName="menu__item_state_active" to="/reports">Reportes</NavLink>
        </li>
      </ul>
      <ul className="menu-bottom">
        <li className="menu__item config">
          <NavLink className="menu__item-link menu__item-link_ico_config" activeClassName="menu__item_state_active" to="/config">Configuración</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;

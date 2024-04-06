import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div style={{ display: "flex", gap: "1rem" }}>
        <span onClick={() => navigate("/")}>İstehsalat</span>
        <div style={{ display: "flex", gap: "1rem" }}>
          <NavLink to="/">Giriş / Çıxış</NavLink>
          <NavLink to="/addUser">İşçi əlave et</NavLink>
          <NavLink to="/delete">İşçi sil</NavLink>
          <NavLink to="/users">İşçilər</NavLink>
          <NavLink to="/">Məzuniyyət</NavLink>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;

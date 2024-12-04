import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Dashboard.scss";

const Dashboard: React.FC = () => {
  return (
    <>
      <nav id="sidebar">
        <ul>
          <li>
            <NavLink to="login">Connexion Admin</NavLink>
          </li>
          <li>
            <NavLink to="signup">Creéation Admin</NavLink>
          </li>
        </ul>
      </nav>
      <section id="detail">
        <Outlet />
      </section>
    </>
  );
};

export default Dashboard;

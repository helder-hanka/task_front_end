import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Dashboard.scss";

const Dashboard: React.FC = () => {
  return (
    <>
      <nav id="sidebar">
        <ul>
          <li>
            <NavLink
              to="login"
              className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "pending" : ""
              }
            >
              Connexion Admin
            </NavLink>
          </li>
          <li>
            <NavLink to="signup">Création Admin</NavLink>
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

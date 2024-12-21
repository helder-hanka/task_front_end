import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Dashboard.scss";
import { getInLocalStorage, removeUserToken } from "../../lib/common";
import Button from "../../components/Button";
import CircleAnimation from "../../components/circle/CircleAnimation";

const Dashboard: React.FC = () => {
  const user = getInLocalStorage();
  const getNavLinkClass = ({
    isActive,
    isPending,
  }: {
    isActive: boolean;
    isPending: boolean;
  }): string => {
    return isActive ? "active" : isPending ? "pending" : "";
  };
  return (
    <>
      <nav id="sidebar">
        <ul>
          <li>
            {user ? (
              <CircleAnimation />
            ) : (
              <NavLink to="login" className={getNavLinkClass}>
                Connexion Admin"
              </NavLink>
            )}
          </li>
          <li>
            <NavLink to="signup" className={getNavLinkClass}>
              Création Admin
            </NavLink>
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

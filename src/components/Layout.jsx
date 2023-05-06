import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const linkList = [
  {
    id: 1,
    to: "/",
    title: "Home",
  },
  {
    id: 2,
    to: "/about",
    title: "About",
  },
  {
    id: 3,
    to: "/content",
    title: "Content",
  },
];

const Layout = () => {
  const handleActiveLink = ({ isActive }) => {
    return isActive ? "isActive" : "";
  };

  return (
    <div>
      <div className="navbar">
        {linkList.map((link) => (
          <NavLink className={handleActiveLink} to={link.to} key={link.id}>
            {link.title}
          </NavLink>
        ))}
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
// token

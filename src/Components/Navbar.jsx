import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <ul>
        INI NAVBAR
        <li>
          <button onClick={() => navigate("/")}>Hero</button>
        </li>
        <li>
          <button onClick={() => navigate("/menu")}>Menu</button>
        </li>
        <li>
          <button onClick={() => navigate("/about")}>About Us</button>
        </li>
        <li>
          <button onClick={() => navigate("/contact")}>Contact</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
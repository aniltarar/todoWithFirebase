import React from "react";
import { FaSignInAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div>
        <Link to="/">YAPILACAKLAR</Link>
      </div>
      <ul>
        <li>
          <Link to="/login">
            Giriş Yap <FaSignInAlt />
          </Link>
        </li>
        <li>
          <Link to="/register">
            Kayıt Ol <FaUser />
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;

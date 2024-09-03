import React from "react";
import { FaSignInAlt, FaUser, FaSignOutAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout, reset } from "../../slices/auth/authSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const onLogout = () => {
    dispatch(logout()); // logout fonksiyonunu çağırıyoruz.
    dispatch(reset()); /// reset fonksiyonunu çağırıyoruz. Çünkü kullanıcı çıkış yaptıktan sonra tekrar giriş yapmaya çalıştığında hata mesajı görmesin.
    navigate("/");
  };

  return (
    <header className="header">
      <div>
        <Link to="/">YAPILACAKLAR</Link>
      </div>
      <ul>
        {user ? (
          <>
            <li>
              <span>Merhaba {user.displayName}</span>
            </li>
            <li>
              <button className="btn" onClick={onLogout}>
                <FaSignOutAlt /> Çıkış yap
              </button>
            </li>
          </>
        ) : (
          <>
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
          </>
        )}
      </ul>
    </header>
  );
};

export default Header;

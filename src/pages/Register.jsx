import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register, reset } from "../slices/auth/authSlice";
import { toast } from "react-toastify";


const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isSuccess, isError, isLoading, user, message } = useSelector(
    (state) => state.auth
  );

  const [formData, setFormData] = useState({
    email: "",
    parola: "",
    kullaniciAd: "",
    parolaKontrol: "",
  });

  const { email, parola, kullaniciAd, parolaKontrol } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (parola !== parolaKontrol) {
      toast.warning("Parolalar eşleşmiyor.");
      return;
    } else {
      const userData = {
        email,
        parola,
        kullaniciAd,
      };
      dispatch(register(userData));
    }
  };

  useEffect(() => {
    if (isSuccess || user) {
      toast.success("Başarılı");
      navigate("/");
    }
    if (isError) {
      toast.error(message);
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  return (
    <>
      <section className="heading">
        <h1>Kayıt Ol</h1>
      </section>
      <section>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Kullanıcı adınızı giriniz."
              className="form-control"
              id="kullaniciAd"
              name="kullaniciAd"
              value={kullaniciAd}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="E-mail adresinizi giriniz."
              className="form-control"
              id="email"
              name="email"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Parolanızı giriniz."
              className="form-control"
              id="parola"
              name="parola"
              value={parola}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Parolanızı tekrar giriniz."
              className="form-control"
              id="parolaKontrol"
              name="parolaKontrol"
              value={parolaKontrol}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Kayıt Ol
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Register;

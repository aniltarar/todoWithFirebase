import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, reset } from "../slices/auth/authSlice";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const [formData, setFormData] = useState({
    email: "",
    parola: "",
  });
  const { email, parola } = formData;
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      parola,
    };

    dispatch(login(userData))
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);


  if(isLoading){
    return <Spinner/>
  }

  return (
    <div>
      <section className="heading">
        <h1>Giriş Yap</h1>
      </section>
      <section>
        <form className="form" onSubmit={onSubmit}>
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
            <button type="submit" className="btn btn-block">
              Giriş Yap
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;

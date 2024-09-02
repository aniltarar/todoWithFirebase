import React, { useState } from "react";

const Login = () => {
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
    console.log(formData);
  };

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
            <button type="submit" className="btn btn-block">Giriş Yap</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;

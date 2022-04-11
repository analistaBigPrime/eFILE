import React, { useState, useContext, useEffect } from "react";
import LoginContext from "../../context/login/LoginContext";
import AlertContext from "../../context/alerts/AlertContext";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();

  const { rpSuccess, infoCompany, auth, rpError, login, getCompany } = useContext(LoginContext);
  const { alert, showAlert } = useContext(AlertContext);

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    getCompany();
    if (auth) {
      history.push('/');
    }
    // eslint-disable-next-line
  }, [rpError, auth, rpSuccess, infoCompany]);

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const { username, password } = user;
  const onSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === '' || password.trim() === '') {
      showAlert('Todos los campos son obligatorios', 'alert-danger')
      return;
    }
    login(user);
  };

  if (infoCompany) {
    document.title = infoCompany.name;
    user.ruc = infoCompany.ruc;
  } else {
    document.title = 'eFILE';
  }
  return (
    <div className="login">
      <div className="auth">
        {rpSuccess ? (<p className="alert alert-success">{rpSuccess}</p>) : null}
        <div className="auth__logo">
          {infoCompany ? <img src={infoCompany.logo} alt={`Logo de ${infoCompany.name}`} /> : <h1>eFILE</h1>}
        </div>
        <h1 className="auth__title">Iniciar Sesion</h1>
        <form className="auth__form" onSubmit={onSubmit}>
          <label name="login">Ingresa tu DNI</label>
          <div className="input">
            <input name="username" type="text" id="login" onChange={onChange} autocomplete="off" className="input__ico input__ico-login" />
          </div>
          <label name="password">Ingresa tu contraseña</label>
          <div className="input">
            <input type="password" name="password" id="password" onChange={onChange} autocomplete="off" className="input__ico input__ico-password" />
            <a href="!#" className="password-control"/>
          </div>
          <div className="submit">
            <div className="submit__link">
              <Link to='/reset-pwd' className="-link">¿Olvidaste tu contraseña?</Link>
            </div>
            {rpError ? (<p className="alert alert-danger">{rpError}</p>) : null}
            {alert ? (<p className={`alert ${alert.category}`}>{alert.msg}</p>) : null}
            <div className="submit__btn">
              <input type="submit" value="Ingresar" className="auth__submit" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

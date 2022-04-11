import React, { useState, useContext, useEffect } from "react";
import LoginContext from "../../context/login/LoginContext";
import AlertContext from "../../context/alerts/AlertContext";
import { Link, useHistory } from "react-router-dom";


const ResetPwd = () => {
  const history = useHistory();

  const { redirectLogin, rpSuccess, infoCompany, rpError, getCompany, resetPwd } = useContext(LoginContext);
  const { alert, showAlert } = useContext(AlertContext);

  //State para iniciar sesion
  const [user, setUser] = useState({
    email: "",
    dni: "",
  });

  useEffect(() => {
    getCompany();
    document.title = 'Restaurar Contraseña';
    if (redirectLogin && rpSuccess) {
      history.push('/login')
    }
    // eslint-disable-next-line
  }, [rpError, redirectLogin, rpSuccess]);

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  //Extraer valores destructuring de user
  const { email, dni } = user;
  const onSubmit = (e) => {
    e.preventDefault();
    //Validar campos ''
    if (email.trim() === '' || dni.trim() === '') {
      showAlert('Todos los campos son obligatorios', 'alert-danger')
      return;
    }
    //Pasar al action
    resetPwd(user);
  };

  return (
    <div className="login">
      <div className="auth">
        <div className="auth__logo">
          {infoCompany ? <img src={infoCompany.logo} alt={`Logo de ${infoCompany.name}`}/> : <h1>eFILE</h1>}
        </div>
        <h1 className="auth__title">Restaurar Contraseña</h1>
        <form className="auth__form" onSubmit={onSubmit}>
          <label name="login">Ingresa tu DNI</label>
          <div className="input">
            <input type="text" name="dni" id="login" autoComplete="off" className="input__ico input__ico-login" onChange={onChange}/>
          </div>
          <label name="email">Ingresa tu e-mail</label>
          <div className="input">
            <input type="text" name="email" id="email" autoComplete="off" className="input__ico input__ico-email" onChange={onChange}/>
          </div>
          <div className="submit">
            <div className="submit__link">
              <Link to="/login" className="-link">Ingresar</Link>
            </div>
            {rpError ? ( <div className="error">{rpError}</div>) : null}
            {alert ? (<p className={`alert ${alert.category}`}>{alert.msg}</p>) : null}
            <div className="submit__btn">
              <input type="submit" value="Restaurar" className="recover__submit" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPwd;

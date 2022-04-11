import React, { useState, useContext, useEffect } from "react";
import UsersContext from "../../../context/users/UsersContext";
import AlertContext from "../../../context/alerts/AlertContext";
import { Link, useHistory } from "react-router-dom";

const NewUser = () => {
  const history = useHistory();

  const { redirectUsers, rpAlertSuccess, rpUserError, newUser } =
    useContext(UsersContext);
  const { alert, showAlert, hideAlert } = useContext(AlertContext);

  useEffect(() => {
    document.title = "Crear Nuevo Personal";
    hideAlert();
    if (rpUserError) {
      showAlert(rpUserError.msg, rpUserError.category);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    if (rpAlertSuccess && redirectUsers) {
      history.push("/usuarios");
    }
    // eslint-disable-next-line
  }, [redirectUsers, rpAlertSuccess, rpUserError]);

  const [user, setUser] = useState({
    dni: "",
    name: "",
    lastname: "",
    email: "",
    phoneNumber: "",
  });
  const { dni, name, lastname, email } = user;

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      dni.trim() === "" ||
      name.trim() === "" ||
      lastname.trim() === "" ||
      email.trim() === ""
    ) {
      showAlert("Algunos campos son obligatorios", "alert-danger");
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    newUser(user);
  };

  return (
    <div className="page__users">
      <div className="content__head">
        <ul className="breadcrams">
          <li className="breadcrumbs__item">
            <Link to="/">Dashboard</Link>
          </li>
          <li className="breadcrumbs__item">
            <Link to="/usuarios">Lista de usuarios</Link>
          </li>
          <li className="breadcrumbs__item">Crear nuevo usuario</li>
        </ul>
      </div>
      <div className="content__head">
        <div className="box__cols">
          <div className="box__col">
            <h1 className="page__title">Crear nuevo usuario</h1>
            <p>Llene los datos solicitados en el formulario para poder crear la cuenta al personal.</p>
          </div>
        </div>
        {alert ? <div className="notification notification_type_error notification_status_active">{alert.msg}</div> : null}
      </div>
      <div className="content__text">
        <div className="content__box">
          <form onSubmit={onSubmit} className="users-new__form">
            <label name="doc-number">DNI</label>
            <div className="input">
              <input type="number" name="dni" onChange={onChange} autoComplete="off" placeholder="Número de documento de identidad" />
            </div>
            <label name="name">Nombres</label>
            <div className="input">
              <input type="text" name="name" onChange={onChange} autoComplete="off" placeholder="Nombres completos" />
              <a href="#" className="password-control" />
            </div>
            <label name="surname">Apellidos</label>
            <div className="input">
              <input type="text" name="lastname" onChange={onChange} autoComplete="off" placeholder="Apellidos completos" />
              <a href="#" className="password-control" />
            </div>
            <label name="mail">Correo Electrónico</label>
            <div className="input">
              <input type="email" name="email" onChange={onChange} autoComplete="off" placeholder="Ingrese correo electrónico" />
              <a href="#" className="password-control" />
            </div>
            <label name="group">Grupo</label>
            <div className="input">
              <input type="text" name="group" id="group" autoComplete="off" placeholder="Ingrese el grupo" />
              <a href="#" className="password-control" />
            </div>
            <div className="users-new__code">
              <label>Código de país</label>
              <div className="select_wrap">
                <select name="postalCode" onChange={onChange} className="select_code">
                  <option className="option">SELECCIONE</option>
                  <option className="option" value="+51">Perú</option>
                  <option className="option" value="+49">Alemania</option>
                  <option className="option" value="+54">Argentina</option>
                  <option className="option" value="+55">Brasil</option>
                  <option className="option" value="+1">Canadá</option>
                  <option className="option" value="+56">Chile</option>
                  <option className="option" value="+57">Colombia</option>
                  <option className="option" value="+593">Ecuador</option>
                  <option className="option" value="+20">Egipto</option>
                  <option className="option" value="+34">España</option>
                  <option className="option" value="+33">Francia</option>
                  <option className="option" value="+31">Holanda</option>
                  <option className="option" value="+212">Marruecos</option>
                  <option className="option" value="+52">México</option>
                  <option className="option" value="+264">Namibia</option>
                  <option className="option" value="+351">Portugal</option>
                  <option className="option" value="+27">Sudáfrica</option>
                  <option className="option" value="+1">Usa</option>
                </select>
              </div>
            </div>
            <div className="users-new__phone">
              <label name="phone">Teléfono</label>
              <div className="input">
                <input type="number" name="phoneNumber" onChange={onChange} autoComplete="off" />
                <a href="#" className="password-control" />
              </div>
            </div>
            <div className="upload-file__wrapper">
              <div className="upload-file__files">
                Descargar archivo de ejemplo
              </div>
              <input type="file" name="files" id="upload-file__input" className="upload-file__input" multiple accept="application/excel,application/vnd.ms-excel,application/x-excel,application/x-msexcel" />
              <p className="upload-file__title">Foto de DNI</p>
              <label className="upload-file__label" htmlFor="upload-file__input">
                <div className="upload-file__icon">
                  <span className="upload-file__text-ico">Arrastre su archivo</span>
                  <span className="upload-file__text">Elegir archivo</span>
                </div>
              </label>
            </div>
            <div className="submit">
              <div className="submit__btn">
                <input type="submit" defaultValue="Guardar" className="users-new__submit" />
              </div>
              <Link to="/usuarios" className="button button__users">Regresar sin guardar</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default NewUser;

import React, { useContext, useState, useEffect } from "react";
import { useLocation, useHistory, Link } from "react-router-dom";
import { getIdPathname } from "../../../helpers";
import UsersContext from "../../../context/users/UsersContext";
import AlertContext from "../../../context/alerts/AlertContext";

const EditUser = () => {
  const history = useHistory();
  const location = useLocation();
  const pathname = location.pathname;
  const id = getIdPathname(pathname);

  const { redirectUsers, rpAlertSuccess, user, updateUser, getUser, rpUserError } = useContext(UsersContext);
  const { alert, showAlert, hideAlert } = useContext(AlertContext);

  const allRoles = [
    {
      id: 2,
      name: "Administrador",
    },
    {
      id: 3,
      name: "Firmante",
    },
    {
      id: 4,
      name: "Trabajador",
    },
    {
      id: 5,
      name: "Gestión de Usuarios",
    },
    {
      id: 6,
      name: "Admin Workflow",
    },
    {
      id: 7,
      name: "Representante Legal",
    },
    {
      id: 8,
      name: "Seguimiento de Notificaciones",
    },
  ];

  const [editUser, setEditUser] = useState(null);
  const [checked, setChecked] = useState(null);

  useEffect(() => {
    document.title = "Editar Usuario";
    if (!user) {
      getUser(id)
    }else{
      setEditUser(user)
      setChecked(user.roles.map(({ id }) => id))
    }
    if (rpAlertSuccess && redirectUsers) {
      history.push('/usuarios');
    }
    // eslint-disable-next-line
  }, [redirectUsers, rpAlertSuccess, user, id]);

  useEffect(() => {
    hideAlert()
    if (rpUserError) {
      showAlert(rpUserError.msg, rpUserError.category);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    // eslint-disable-next-line
  }, [rpUserError])
  
  const onChange = (e) => {
    setEditUser({
      ...editUser,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeChecked = e => {
    const check = parseInt(e.target.value, 10);
    if (checked.includes(check)) {
      setChecked(checked.filter((c) => c !== check));
    } else {
      setChecked([...checked, check]);
    }
  };

  if (!editUser) return null;

  const onSubmit = (e) => {
    e.preventDefault();
    editUser.roles = checked;
    updateUser(id, editUser);
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
          <li className="breadcrumbs__item">Editar usuario</li>
        </ul>
      </div>
      <div className="content__head">
        <div className="box__cols">
          <div className="box__col">
            <h1 className="page__title">Editar usuario</h1>
            <p>Llene los datos solicitados en el formulario para poder crear la cuenta al personal.</p>
          </div>
        </div>
        {alert ? <div className="notification notification_type_error notification_status_active">{alert.msg}</div> : null}
      </div>
      <div className="content__text">
        <div className="content__box">
          <form className="users-new__form" onSubmit={onSubmit}>
            <label name="doc-number">DNI</label>
            <div className="input">
              <input type="text" name="dni" value={editUser.dni} onChange={onChange} autoComplete="off" placeholder="Número de documento de identidad" />
            </div>
            <label name="name">Nombres</label>
            <div className="input">
              <input type="text" name="name" value={editUser.name} onChange={onChange} autoComplete="off" placeholder="Nombres completos" />
              <a href="#" className="password-control" />
            </div>
            <label name="surname">Apellidos</label>
            <div className="input">
              <input type="text" name="lastname" value={editUser.lastname} onChange={onChange} autoComplete="off" placeholder="Apellidos completos" />
              <a href="#" className="password-control" />
            </div>
            <label name="mail">Correo Electrónico</label>
            <div className="input">
              <input type="email" name="correo" value={editUser.email} onChange={onChange} autoComplete="off" placeholder="Ingrese correo electrónico" />
              <a href="#" className="password-control" />
            </div>
            <label name="group">Grupo</label>
            <div className="input">
              <input type="text" name="group" id="group" autoComplete="off" placeholder="Ingrese el grupo" />
              <a href="#" className="password-control" />
            </div>
            <div className="users-new__code">
              <label name="code">Código de país</label>
              <div className="select_wrap">
                <select name="postalCode" value={editUser.postalCode} onChange={onChange} className="select_code">
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
                <input type="number" name="phoneNumber" value={editUser.phoneNumber} onChange={onChange} autoComplete="off" />
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
            <div className="users-new__check">
              {allRoles.map((role) => (
                <div key={role.id}>
                  <input type="checkbox" id={role.id} name={role.id} checked={checked.includes(role.id)} value={role.id} onChange={onChangeChecked} />
                  <label for={role.id} className="users-new__check-label">{role.name}</label>
                </div>
              ))}
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

export default EditUser;

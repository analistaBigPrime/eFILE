import React, { useContext, useEffect, useState } from "react";
import UsersContext from "../../../context/users/UsersContext";
import { getIdPathname } from "../../../helpers";
import { useLocation, Link, useHistory } from "react-router-dom";
import { Modal } from '@material-ui/core';

const User = () => {
  const history = useHistory();
  const location = useLocation();
  const pathname = location.pathname;
  const id = getIdPathname(pathname);

  const { redirectUsers, rpAlertSuccess, user, getUser, disableUser, enableUser, restorePassword } = useContext(UsersContext);

  useEffect(() => {
    getUser(id);
    if (rpAlertSuccess && redirectUsers) {
      history.push('/usuarios')
    }
    // eslint-disable-next-line
  }, [redirectUsers, rpAlertSuccess, user, id]);

  const [resetPasswordModal, setResetPasswordModal] = useState(false);
  const [unsubscribeUserModal, setUnsubscribeUserModal] = useState(false);

  const openCloseResetPasswordModal = () => {
    setResetPasswordModal(!resetPasswordModal);
  }

  const openCloseUnsubscribeUserModal = () => {
    setUnsubscribeUserModal(!unsubscribeUserModal);
  }

  if (!user) return null;

  document.title = `${user.name} ${user.lastname}`;
  const roles = user.roles.map(({ name }) => name).join(', ');

  return (
    <div className="page__users">
      <Modal
        open={resetPasswordModal}
        onClose={openCloseResetPasswordModal}
      >
        <div className="modal">
          <div className="modal__title">Restaurar contraseña</div>
          <button onClick={openCloseResetPasswordModal} className="close-modal" />
          <div className="modal__content user__confirm">
            <p className="font_size_16">¿Esta seguro que desea restaurar la contraseña?</p>
            <p className="text_align_r"><button onClick={() => restorePassword(id)} className="button button_type_green">Si, restaurar contraseña</button></p>
          </div>
        </div>
      </Modal>
      <Modal
        open={unsubscribeUserModal}
        onClose={openCloseUnsubscribeUserModal}
      >
        <div class="modal">
          {
            user.active ? (
              <>
                <div class="modal__title">¡Confirmación de baja!</div>
                <button onClick={openCloseUnsubscribeUserModal} className="close-modal" />
                <div class="modal__content user__confirm">
                  <p class="font_size_16">{`¿Está seguro que desea dar de baja al usuario ${user.name} ${user.lastname} con DNI ${user.dni}?`}</p>
                  <p class="text_align_r"><button onClick={() => disableUser(id)} class="button button_type_green">Si, dar de baja</button></p>
                </div>
              </>
            ) : (
              <>
                <div class="modal__title">¡Confirmación de Activación!</div>
                <button onClick={openCloseUnsubscribeUserModal} className="close-modal" />
                <div class="modal__content user__confirm">
                  <p class="font_size_16">{`¿Está seguro que desea activar al usuario ${user.name} ${user.lastname} con DNI ${user.dni}?`}</p>
                  <p class="text_align_r"><button onClick={() => enableUser(id)} class="button button_type_green">Si, activar</button></p>
                </div>
              </>
            )
          }
        </div>
      </Modal>
      <div className="content__head">
        <ul className="breadcrams">
          <li className="breadcrumbs__item">
            <Link to="/">Dashboard</Link>
          </li>
          <li className="breadcrumbs__item">
            <Link to="/usuarios">Lista de usuarios</Link>
          </li>
          <li className="breadcrumbs__item">Datos de usuario</li>
        </ul>
      </div>
      <div className="content__head">
        <div className="box__cols">
          <div className="box__col">
            <h1 className="page__title">Datos de usuario</h1>
            <p>Llene los datos solicitados en el formulario para poder crear la cuenta al personal.</p>
          </div>
        </div>
      </div>
      <div className="content__text">
        <div className="content__box users-data__box">
          <div className="content__box-head users-data__head">
            <Link to={`/usuarios/edit/${id}`} className="button">Editar usuario</Link>
            <button onClick={openCloseResetPasswordModal} className="open-modal button">Restaurar contraseña</button>
            {user.active ? <button onClick={openCloseUnsubscribeUserModal} href="#confirm" className="open-modal button button_type_green">Dar de baja</button> : <button onClick={openCloseUnsubscribeUserModal} href="#confirm" className="open-modal button button_type_green">Activar</button>}
          </div>
          <h3>{`${user.name} ${user.lastname}`}</h3>
          <p className="text_color_gray p_mb_8">DNI</p>
          <p>{user.dni}</p>
          <p className="text_color_gray p_mb_8">Correo Electrónico</p>
          <p>{user.email}</p>
          <p className="text_color_gray p_mb_8">Rol</p>
          <p>{roles}</p>
        </div>
      </div>
    </div>
  );
};

export default User;

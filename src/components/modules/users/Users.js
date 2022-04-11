import React, { useContext, useEffect, useState } from "react";
import UsersContext from "../../../context/users/UsersContext";
import { useLocation, Link } from "react-router-dom";
import Header from './Header'
import Table from "./Table";
import Pagination from "./Pagination";
import Downloads from "./Downloads";
import { Modal } from '@material-ui/core';

const User = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const { rpAlertSuccess, users, getUsers, uploadUsers, activateUsers } = useContext(UsersContext);

  useEffect(() => {
    document.title = 'Lista de Usuarios';
    getUsers(pathname);
    window.scrollTo({
      top: 0
    })
    // eslint-disable-next-line
  }, [pathname, rpAlertSuccess]);

  const [file, setFile] = useState(null);
  const uploadFile = e => {
    setFile(e.target.files)
  }

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file[0]);
    await uploadUsers(formData);
    openCloseModal();
  }

  const onSubmitActivateUsers = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file[0]);
    await activateUsers(formData);
    openCloseActivateUsersModal();
  }

  const [modal, setModal] = useState(false);
  const [activateUsersModal, setActivateUsersModal] = useState(false);

  const openCloseModal = () => {
    setModal(!modal);
  }
  const openCloseActivateUsersModal = () => {
    setActivateUsersModal(!activateUsersModal);
  }

  if (!users) return null;
  return (
    <div className="page__users">
      <Modal
        open={modal}
        onClose={openCloseModal}
      >
        <div className="modal">
          <div className="modal__title">Crear varios usuarios</div>
          <button onClick={openCloseModal} className="close-modal"/>
          <div className="modal__content">
            <form  onSubmit={onSubmit} className="users__form-upload">
              <div className="upload-file__wrapper">
                <div className="upload-file__example s_mb_32">
                  <div className="s_mb_16">Descargar archivo de ejemplo</div>
                  <div className="upload-file__block">
                    <div className="upload-file__name">example.xls<br />
                      <span className="upload-file__size">8 Kb</span>
                    </div>
                    <a className="upload-file__download" target="_blank|" href="./assets/resources/plantilla-de-trabajadores.xlsx" download="plantilla-de-trabajadores.xlsx" />
                  </div>
                </div>
                <div className="upload-file__files s_mb_24">
                </div>
                <p className="upload-file__title">Suba un archivo excel de todos sus trabajadores.</p>
                <input type="file" name="files" onChange={uploadFile}/>
              </div>
              <div className="submit">
                <div className="submit__btn text_align_r">
                  <input type="submit" defaultValue="Subir archivo" className="users-new__submit" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal>
      <Modal
        open={activateUsersModal}
        onClose={openCloseActivateUsersModal}
      >
        <div className="modal">
          <div className="modal__title">Activar usuarios por lotes</div>
          <button onClick={openCloseActivateUsersModal} className="close-modal"/>
          <div className="modal__content">
            <form  onSubmit={onSubmitActivateUsers} className="users__form-upload">
              <div className="upload-file__wrapper">
                <div className="upload-file__example s_mb_32">
                  <div className="s_mb_16">Descargar archivo de ejemplo</div>
                  <div className="upload-file__block">
                    <div className="upload-file__name">example.xls<br />
                      <span className="upload-file__size">8 Kb</span>
                    </div>
                    <a className="upload-file__download" target="_blank" href="./assets/resources/plantilla-para-activar-trabajadores.xlsx" download="plantilla-para-activar-trabajadores.xlsx" />
                  </div>
                </div>
                <div className="upload-file__files s_mb_24">
                </div>
                <p className="upload-file__title">Suba un archivo excel de todos sus trabajadores.</p>
                <input type="file" name="files" onChange={uploadFile}/>
              </div>
              <div className="submit">
                <div className="submit__btn text_align_r">
                  <input type="submit" defaultValue="Subir archivo" className="users-new__submit" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal>
      <div className="content__head">
        <ul className="breadcrams">
          <li className="breadcrumbs__item">
            <Link to="/">Dashboard</Link>
          </li>
          <li className="breadcrumbs__item">Lista de usuarios</li>
        </ul>
      </div>
      <div className="content__head">
        <div className="box__cols">
          <div className="box__col">
            <h1 className="page__title">Lista de Usuarios</h1>
          </div>
          <div className="box__col text_align_r box__col_btns_mobile">
            <Link to="/usuarios/create" className="button button_with_ico button_ico_user">Crear nuevo usuario</Link>
            <button onClick={openCloseModal} className="open-modal button button_with_ico button_ico_xls">Crear varios usuarios</button>
            <button onClick={openCloseActivateUsersModal} className="open-modal button button_with_ico button_ico_xls">Activar usuarios por lotes</button>
          </div>
        </div>
      </div>
      <Header />
      <div className="content-head">
        {rpAlertSuccess ? <div className="notification notification_type_success notification_status_active">{rpAlertSuccess}</div> : null}
      </div>
      <div className="content__text">
        <Downloads />
        <div className="pagination-head">
          <div className="pagination-head__pages">1-10 de 76</div>
          <div className="pagination-head__btn pagination-head__btn_type_prev pagination-head__btn_type_disabled" />
          <div className="pagination-head__btn pagination-head__btn_type_next" />
        </div>
        <div className="content__box s_mb_0">
          <div className="table-wrap">
            <Table users={users.rows} />
          </div>
          <div className="pagination-count">
            <div className="pagination-count__text-main">{`Mostrando página ${users.page} de ${users.pages}`}</div>
            <div className="pagination-count__label">Mostrar:</div>
            <div className="pagination-count__select">
              <div className="select_wrap">
                <ul className="default_option">
                  <li>
                    <div className="option">10</div>
                  </li>
                </ul>
                <ul className="select_ul">
                  <li>
                    <div className="option">25</div>
                  </li>
                  <li>
                    <div className="option">50</div>
                  </li>
                  <li>
                    <div className="option">100</div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pagination-count__text">registros</div>
          </div>
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default User;

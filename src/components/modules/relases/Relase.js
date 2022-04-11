import React, { useContext, useEffect } from "react";
import RelasesContext from "../../../context/relases/RelasesContext";
import { Link, useLocation } from "react-router-dom";
import { getIdPathname } from "../../../helpers";

const Relase = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const id = getIdPathname(pathname);
  const { relase, download, getRelase } = useContext(RelasesContext);

  useEffect(() => {
    document.title = "Vista Previa";
    getRelase(id)
    // eslint-disable-next-line
  }, [relase]);

  if (!relase) return null;
  return (
    <div className="page__announcements">
      <div className="content__head">
        <ul className="breadcrams">
          <li className="breadcrumbs__item">
            <Link to="/">Dashboard</Link>
          </li>
          <li className="breadcrumbs__item">
            <Link to="/comunicados">Comunicados</Link>
          </li>
          <li className="breadcrumbs__item">{`Comunicado - ${relase.name}`}</li>
        </ul>
      </div>
      <div className="content__head">
        <div className="box__cols">
          <div className="box__col">
            <h1 className="page__title">{`Comunicado - ${relase.name}`}</h1>
            <p>Vigente desde: Diciembre 2021</p>
          </div>
        </div>
      </div>
      <div className="content__text">
        <div className="content__box s_mb_0">
          <div className="announcements__details">
            <p className="p_mb_0">Documentos Enviados Y Firmados</p>
            <div className="announcements__attach">
              <div className="announcements__attach-name">
                {relase.documentList[0].nameFile}<br /> <span className="announcements__attach-size">2,4 MB</span>
              </div>
              <div className="announcements__attach-right">
                <button onClick={() => download(relase.documentList[0].urlDownloadDocument, relase.documentList[0].nameFile.slice(0, -4))} className="button button_type_blue button_with_ico button_ico_download-white">Descargar firmado</button>
                <Link to={`/comunicados/show-document/${relase.documentList[0].id}`} className="button button_type_green button_with_ico button_ico_check-white">Verificar firma</Link>
              </div>
            </div>
          </div>
          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th>DNI</th>
                  <th>Nombre</th>
                  <th>Correo electrónico</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {
                  relase.userList.map((user) => (
                    <tr key={user.id}>
                      <td>{user.dni}</td>
                      <td>{user.fullName}</td>
                      <td>{user.email}</td>
                      <td><button className="button_download-acuse" onClick={() => download(user.urlDownloadAcuseDocument, user.id)}>Descargar acuse</button></td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
          <div className="pagination-count">
            <div className="pagination-count__text-main">Mostrando documentos del 11 al 20 de un total de 65 registros</div>
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
      </div>
    </div>
  );
};

export default Relase;


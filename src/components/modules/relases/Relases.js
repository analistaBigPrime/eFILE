import React, { useContext, useEffect } from "react";
import UsersContext from "../../../context/relases/RelasesContext";
import { useLocation, Link } from "react-router-dom";
import Header from './Header'
import Table from "./Table";
import Pagination from "./Pagination";
import Downloads from "./Downloads";

const User = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const { relases, getRelases } = useContext(UsersContext);

  useEffect(() => {
    document.title = 'Comunicados';
    getRelases(pathname);
    window.scrollTo({
      top: 0
    })
    // eslint-disable-next-line
  }, [pathname]);

  if (!relases) return null;
  return (
    <div className="page__announcements">
      <div className="content__head">
        <ul className="breadcrams">
          <li className="breadcrumbs__item">
            <Link to="/">Dashboard</Link>
          </li>
          <li className="breadcrumbs__item">Comunicados</li>
        </ul>
      </div>
      <div className="content__head">
        <div className="box__cols">
          <div className="box__col">
            <h1 className="page__title">Lista de Comunicados enviados</h1>
          </div>
          <div className="box__col text_align_r box__col_btns_mobile">
            <a href="./announcements_create.html" className="button button_with_ico button_type_blue button_ico_create-white">Crear nuevo usuario</a>
          </div>
        </div>
      </div>
      <Header/>
      <div className="content__text">
        <Downloads/>
        <div className="pagination-head">
          <div className="pagination-head__pages">1-10 de 76</div>
          <div className="pagination-head__btn pagination-head__btn_type_prev pagination-head__btn_type_disabled" />
          <div className="pagination-head__btn pagination-head__btn_type_next" />
        </div>
        <div className="content__box s_mb_0">
          <div className="table-wrap">
            <Table relases={relases.rows} />
          </div>
          <div className="pagination-count">
            <div className="pagination-count__text-main">{`Mostrando página ${relases.page} de ${relases.pages}`}</div>
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
        <Pagination/>
      </div>
    </div>
  );
};

export default User;

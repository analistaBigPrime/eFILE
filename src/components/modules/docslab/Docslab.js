import React, { useContext, useEffect } from "react";
import DocslabContext from "../../../context/docslab/DocslabContext"
import { useLocation, Link } from "react-router-dom";
import Header from './Header'
import Table from "./Table";
import Pagination from "./Pagination";
import Downloads from "./Downloads";

const Docslab = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const { docslab, getDocslab } = useContext(DocslabContext)

  useEffect(() => {
    document.title = 'Procesos';
    getDocslab(pathname);
    window.scrollTo({
      top: 0
    })
    // eslint-disable-next-line
  }, [pathname])

  if (!docslab) return null;
  return (
    <div className="page__docs">
      <div className="content__head">
        <ul className="breadcrams">
          <li className="breadcrumbs__item">
            <Link to="/">Dashboard</Link>
          </li>
          <li className="breadcrumbs__item">Doc. laborales</li>
        </ul>
      </div>
      <div className="content__head">
        <div className="box__cols">
          <div className="box__col">
            <h1 className="page__title">Lista de Documentos laborales</h1>
          </div>
          <div className="box__col text_align_r">
            <a href="./docs_config.html" className="button button_with_ico button_ico_conf">Configuración</a>
            <a href="./docs_create.html" className="button button_with_ico button_type_blue button_ico_create-white">Crear nuevo envío</a>
          </div>
        </div>
      </div>
      <div className="content__head">
        <form name="search" className="docs__form">
          <label className="docs__label">Buscar por Asunto</label>
          <div className="select_wrap">
            <ul className="default_option">
              <li>
                <div className="option">Tipo de documento</div>
              </li>
            </ul>
            <ul className="select_ul cheage-data-select">
              <li>
                <div className="option" data-select="period">Periodo</div>
              </li>
              <li>
                <div className="option" data-select="type">Tipo de documento</div>
              </li>
            </ul>
          </div>
          <div className="change-data change-data-period">
            <div className="select_wrap">
              <ul className="default_option">
                <li>
                  <div className="option">Boleta de pago</div>
                </li>
              </ul>
              <ul className="select_ul">
                <li>
                  <div className="option">Boleta de pago 1</div>
                </li>
                <li>
                  <div className="option">Boleta de pago 2</div>
                </li>
              </ul>
            </div>
            <div className="select_wrap">
              <ul className="default_option">
                <li>
                  <div className="option">2022</div>
                </li>
              </ul>
              <ul className="select_ul">
                <li>
                  <div className="option">2019</div>
                </li>
                <li>
                  <div className="option">2020</div>
                </li>
                <li>
                  <div className="option">2021</div>
                </li>
                <li>
                  <div className="option">2022</div>
                </li>
              </ul>
            </div>
          </div>
          <div className="change-data change-data-type">
            <div className="select_wrap">
              <ul className="default_option">
                <li>
                  <div className="option">Seleccione un mes</div>
                </li>
              </ul>
              <ul className="select_ul">
                <li>
                  <div className="option" data-select="period">Seleccione 1</div>
                </li>
                <li>
                  <div className="option" data-select="type">Seleccione 2</div>
                </li>
              </ul>
            </div>
          </div>
          <input className="input__search-btn" type="submit" defaultValue="Buscar" />
        </form>
      </div>
      <div className="content__text">
        <Downloads/>
        <div className="pagination-head">
          <div className="pagination-head__pages">1-10 de 76</div>
          <div className="pagination-head__btn pagination-head__btn_type_prev pagination-head__btn_type_disabled" />
          <div className="pagination-head__btn pagination-head__btn_type_next" />
        </div>
        <div className="content__box s_mb_0">
          <div className="table-wrap">
            <Table docslab={docslab.rows} />
          </div>
          <div className="pagination-count">
          <div className="pagination-count__text-main">{`Mostrando página ${docslab.page} de ${docslab.pages}`}</div>
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

export default Docslab;

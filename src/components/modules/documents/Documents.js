import React, { useEffect, useContext } from "react";
import DocumentsContext from "../../../context/documents/DocumentsContext";
import { Link, useLocation } from "react-router-dom";
import Header from "./Header";
import Pagination from "./Pagination";


const Documents = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const { documents, getDocuments } = useContext(DocumentsContext);

  useEffect(() => {
    document.title = 'Documentos';
    getDocuments(pathname);
    window.scrollTo({
      top: 0
    })
    // eslint-disable-next-line
  }, [pathname]);

  if (!documents) return null;

  return (
    <div className="page__mails">
      <div className="content__head">
        <ul className="breadcrams">
          <li className="breadcrumbs__item">
            <Link to="/">Dashboard</Link>
          </li>
          <li className="breadcrumbs__item">Mis Documentos</li>
        </ul>
      </div>
      <div className="content__head">
        <div className="box__cols">
          <div className="box__col">
            <h1 className="page__title">Mis Documentos</h1>
          </div>
        </div>
      </div>
      <Header />
      <div className="content__text">
        <div className="pagination-head">
          <div className="pagination-head__pages">1-10 de 76</div>
          <div className="pagination-head__btn pagination-head__btn_type_prev pagination-head__btn_type_disabled" />
          <div className="pagination-head__btn pagination-head__btn_type_next" />
        </div>
        <div className="content__box s_mb_0">
          {
            documents.rows.map((document) => (
              <Link to={`/document/${document.id}`} key={document.id} className="mails__row">
                <div className="mails__col mails__ico-mail" />
                <div className="mails__col mails__name">
                  <span className="mails__name_type_subj">Javier Silva Saavedra</span>
                  <span className="mails__name_type_desc">{document.emailSubject}</span>
                </div>
                <div className="mails__col mails__ico-bage">
                  <div className="bage bage_size_big bage__dotted bage__dotted_color_red">Releases</div>
                </div>
                <div className="mails__col mails__ico-bookmark" />
                <div className="mails__col mails__date">
                  28 Jul
                  <span className="mails__size">2 MB</span>
                </div>
              </Link>
            ))
          }
          <div className="pagination-count">
            <div className="pagination-count__text-main">{`Mostrando página ${documents.page} de ${documents.pages}`}</div>
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
      <Pagination />
    </div>
  );
};

export default Documents;

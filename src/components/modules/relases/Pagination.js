import React, { useContext } from "react";
import RelasesContext from "../../../context/relases/RelasesContext";
import { Link } from "react-router-dom";

const Pagination = () => {

  const { relases } = useContext(RelasesContext);
  const { page, pages, records } = relases;

  const buttons = [];
  for (let index = 1; index <= pages; index++) {
    if (index === page) {
      buttons.push(<Link to={`/comunicados/${index}`}><div className="pagination__btn pagination__btn-active">{index}</div></Link>)
    } else {
      buttons.push(<Link to={`/comunicados/${index}`}><div className="pagination__btn">{index}</div></Link>)
    }
  }

  return (
    <>
      {
        records > 25 ? (
          <div className="pagination">
            {page === 1 ? <div className="pagination__btn">&lt;&lt;</div> : <Link to={`/comunicados/${page - 1}`}><div className="pagination__btn">&lt;&lt;</div></Link>}
              <div className="pagination__count">
                {buttons}
              </div>
            {page === pages ? <div className="pagination__btn">&gt;&gt;</div> : <Link to={`/comunicados/${page + 1}`}><div className="pagination__btn">&gt;&gt;</div></Link>}
          </div>
        ) : null
      }
    </>
  );
};

export default Pagination;

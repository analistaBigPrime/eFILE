import React, { useContext } from "react";
import Docslab from "../../../context/docslab/DocslabContext";
import { Link } from "react-router-dom";

const Pagination = () => {

  const { docslab } = useContext(Docslab);
  const { page, pages, records } = docslab;

  const buttons = [];
  for (let index = 1; index <= pages; index++) {
    if (index === page) {
      buttons.push(<Link to={`/doclaboral/${index}`}><div className="pagination__btn pagination__btn-active">{index}</div></Link>)
    } else {
      buttons.push(<Link to={`/doclaboral/${index}`}><div className="pagination__btn">{index}</div></Link>)
    }
  }
  
  return (
    <>
      {
        records > 25 ? (
          <div className="pagination">
            {page === 1 ? <div className="pagination__btn">&lt;&lt;</div> : <Link to={`/doclaboral/${page - 1}`}><div className="pagination__btn">&lt;&lt;</div></Link>}
            <div className="pagination__count">
              {buttons}
            </div>
            {page === pages ? <div className="pagination__btn">&gt;&gt;</div> : <Link to={`/doclaboral/${page + 1}`}><div className="pagination__btn">&gt;&gt;</div></Link>}
          </div>
        ) : null
      }
    </>
  );
};

export default Pagination;
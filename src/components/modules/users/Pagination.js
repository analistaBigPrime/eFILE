import React, { useContext } from "react";
import UsersContext from "../../../context/users/UsersContext";
import { Link } from "react-router-dom";

const Pagination = () => {

  const { users } = useContext(UsersContext);
  const { page, pages, records } = users;

  const buttons = [];
  for (let index = 1; index <= pages; index++) {
    if (index === page) {
      buttons.push(<Link to={`/usuarios/${index}`}><div className="pagination__btn pagination__btn-active">{index}</div></Link>)
    } else {
      buttons.push(<Link to={`/usuarios/${index}`}><div className="pagination__btn">{index}</div></Link>)
    }
  }

  return (
    <>
      {
        records > 25 ? (
          <div className="pagination">
            {page === 1 ? <div className="pagination__btn">&lt;&lt;</div> : <Link to={`/usuarios/${page - 1}`}><div className="pagination__btn">&lt;&lt;</div></Link>}
            <div className="pagination__count">
              {buttons}
            </div>
            {page === pages ? <div className="pagination__btn">&gt;&gt;</div> : <Link to={`/usuarios/${page + 1}`}><div className="pagination__btn">&gt;&gt;</div></Link>}
          </div>
        ) : null
      }
    </>
  );
};

export default Pagination;

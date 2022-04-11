import React, {useContext} from "react";
import DocumentsContext from "../../../context/documents/DocumentsContext";
import {useHistory} from "react-router-dom";

const Pagination = () => {
  const history = useHistory();

  const {documents} = useContext(DocumentsContext);
  const {page, pages, records} = documents;

  const previous = ()=>{
    if(page === 1){
      const newActual = page;
      history.push(`/documents/${newActual}`)
    }else{
      const newActual = page - 1;
      history.push(`/dcocuments/${newActual}`)
    }
  }
  const next = ()=>{
    const newActual = page + 1;
    history.push(`/documents/${newActual}`)
  }

  return (
    <>
      {records > 25 ? (
        <div className="pagination">
          {(page === 1) ? null : (
            <div className="pagination__btn" onClick={previous}>&lt;&lt; Anterior</div>
          )}
          {(page === pages) ? null : (
            <div className="pagination__btn" onClick={next}>Siguiente &gt;&gt; </div>
          )}
        </div>
      ) : null}
    </>
  );
};

export default Pagination;

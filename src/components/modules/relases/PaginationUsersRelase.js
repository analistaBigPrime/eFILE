import React, {useContext} from "react";
import RelasesContext from "../../../context/relases/RelasesContext";
import {useHistory} from "react-router-dom";

const Pagination = () => {
  const history = useHistory();
  
  const {relases} = useContext(RelasesContext);
  const {page, pages, records} = relases;

  const previous = ()=>{
    if(page === 1){
      const newActual = page;
      history.push(`/comunicados/${newActual}`)
    }else{
      const newActual = page - 1;
      history.push(`/comunicados/${newActual}`)
    }
  }
  const next = ()=>{
    const newActual = page + 1;
    history.push(`/comunicados/${newActual}`)
  }

  return (
    <div>
      <p className="mb-2 text-center text-md-left">{`Mostrando la página ${page} de ${pages}`}</p>
      {records > 25 ? (
        <div className="gap-5 w-100 d-flex justify-content-center">
          {(page === 1) ? null :(
            <button onClick={previous} type="button" className="btn">
              &laquo; Anterior
            </button> 
          )}
          {(page === pages) ? null :(
            <button onClick={next} type="button" className="btn">
              Siguiente &raquo;
            </button>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default Pagination;

import React from "react";
import Tr from "./Tr";
const Table = ({ docslab }) => {
  return (

    <table id="exelDocuments" className="table">
      <thead>
        <tr>
          <th>
            <span className="table__thead-sortable">Periodo</span>
          </th>
          <th>
            <span className="table__thead-sortable">Tipo de proceso</span>
          </th>
          <th>
            <span className="table__thead-sortable">Nombre</span>
          </th>
          <th>
            <span className="table__thead-sortable">Estado</span>
          </th>
          <th>
            <span className="table__thead-sortable">Creado</span>
          </th>
          <th />
        </tr>
      </thead>
      <tbody>
        {docslab.map((doclab) => (
          <Tr key={doclab.id} doclab={doclab} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;

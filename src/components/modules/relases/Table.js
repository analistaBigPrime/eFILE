import React from "react";
import Tr from "./Tr";
const Table = ({ relases }) => {
  return (
    <table id="exelDocuments" className="table">
      <thead>
        <tr>
          <th>
            <span className="table__thead-sortable">Periodo</span>
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
        {relases.map((relase) => (
          <Tr key={relase.id} relase={relase} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
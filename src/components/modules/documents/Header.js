import React, { useState, useContext, useEffect } from "react";
import DocumentsContext from "../../../context/documents/DocumentsContext";
import AlertContext from "../../../context/alerts/AlertContext";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import jsPDF from "jspdf";
import "jspdf-autotable";

const Haeader = () => {
  const {documents, filterDocuments} = useContext(DocumentsContext);
  const { alert, showAlert, hideAlert } = useContext(AlertContext);

  useEffect(() => {
    hideAlert();
    // eslint-disable-next-line
  }, [])
  
  const [search, setSearch] = useState({
    tipoBusqueda: "",
    valorBusqueda: "",
  });

  const { valorBusqueda } = search;

  const onChange = e => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = e => {
    e.preventDefault()
    if (valorBusqueda.trim() === "") {
      showAlert(
        "Por favor introduzca un valor.",
        "alert-danger col-12 col-lg-3"
      );
      return;
    }
    filterDocuments(search);
  };

  const onClickPdf = () => {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = "ExampleFile";
    const headers = [["Empresa", "Tipo de documento", "Periodo"]];

    const data = documents.rows.map(document=> ["1", document.processName, document.processPeriod]);

    let content = {
      startY: 50,
      head: headers,
      body: data
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("ExampleFile.pdf")
  };

  return (
    <div className="content__head">
        <form name="search" className="workflow__form">
          <label className="workflow__label">Buscar por:</label>
          <div className="select_wrap">
            <ul className="default_option">
              <li>
                <div className="option">Asunto</div>
              </li>
            </ul>
            <ul className="select_ul">
              <li>
                <div className="option">Asunto</div>
              </li>
            </ul>
          </div>
          <input className="input__search" type="text" placeholder="Ingresar texto" />
          <input className="input__search-btn" type="submit" defaultValue="Buscar" />
          <div className="workflow__date">
            <div className="workflow__check">
              <input type="checkbox" id="date-on" name="date-on" />
              <label htmlFor="date-on" className="s_mb_0">Por fecha</label>
            </div>
            <input type="text" className="calendar workflow__calendar" id="date" name="daterange" placeholder=" _ _ / _ _ / _ _ _ _     _ _ / _ _ / _ _ _ _ " disabled />
          </div>
        </form>
      </div>
  );
};

export default Haeader;

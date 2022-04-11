import React, { useState, useContext, useEffect } from "react";
import DocslabContext from "../../../context/docslab/DocslabContext";
import AlertContext from "../../../context/alerts/AlertContext";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import jsPDF from "jspdf";
import "jspdf-autotable";

const Haeader = () => {
  const { filterDocslab, docslab } = useContext(DocslabContext);
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
    filterDocslab(search);
  };

  const onClickPdf = () => {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = "ExampleFile";
    const headers = [["Periodo", "Tipo de Proceso", "Nombre", "Estado", "Creado"]];

    const data = docslab.rows.map(doclab=> [doclab.periodDate, doclab.typeProcessName, doclab.name, doclab.state, doclab.createdAt]);

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
    <div className="card-header">
      {alert ? <p className={`alert ${alert.category}`}>{alert.msg}</p> : null}
      <div className="card-header-row">
        <div className="justify-content-between d-flex row align-items-center">
          <div className="col-lg-7">
            <form onSubmit={onSubmit} className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <select
                    name="tipoBusqueda"
                    onChange={onChange}
                    className="form-control"
                  >
                    <option>Filtrar por</option>
                    <option value="name">Nombre</option>
                    <option value="periodo">Periodo</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <div className="input-icon">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Buscar"
                      onChange={onChange}
                      name="valorBusqueda"
                    />
                    <button type="submit" className="input-icon-addon">
                      <i className="fa fa-search"></i>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-5">
            <div className="justify-content-md-end d-flex card-tools justify-content-center">
              <span className="mr-3 btn btn-info btn-border btn-round btn-sm">
                <span className="btn-label">
                  <i className="fa fa-file-excel"></i>
                </span>
                <ReactHTMLTableToExcel
                  className="btn-tb"
                  id="exel"
                  table="exelDocuments"
                  filename="ExampleFile"
                  sheet="Sheet1"
                  buttonText="Excel"
                />
              </span>
              <span className="mr-3 btn btn-info btn-border btn-round btn-sm">
                <span className="btn-label">
                  <i className="fa fa-file-pdf"></i>
                </span>
                <button onClick={onClickPdf} className="btn-tb" type="button">Pdf</button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Haeader;

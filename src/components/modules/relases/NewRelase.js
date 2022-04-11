import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import AlertContext from "../../../context/alerts/AlertContext";
import RelasesContext from "../../../context/relases/RelasesContext";

const NewRelase = () => {
  const history = useHistory();
  const {alert, showAlert, hideAlert} = useContext(AlertContext);
  const {infoNewRelase, redirectNewRelasePreview, newRelase} = useContext(RelasesContext);
  
  useEffect(() => {
    document.title = "Nuevo Comunicado";
    hideAlert();
    if(infoNewRelase && redirectNewRelasePreview) {
      history.push(`/comunicados/view-pdf/${infoNewRelase.userList[0].id}`);
    }
    // eslint-disable-next-line
  }, [infoNewRelase, redirectNewRelasePreview]);

  const [info, setInfo] = useState({
    name: "",
    periodDateMonth: "",
    periodDateYear: "2021"
  });
  const {name, periodDateMonth, periodDateYear} = info;

  const onChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };

  const[files, setFiles] = useState(null);
  const uploadFiles = e =>{
    setFiles(e.target.files)
  }
  
  const onSubmit = (e) => {
    e.preventDefault();
    if(name.trim() === "" || periodDateMonth === "" || periodDateYear === "" || !files){
      showAlert("Todos los campos son obligatorios", "alert-danger");
      return;
    }

    const formData = new FormData();
    formData.append("request", JSON.stringify(info))
    for (let index = 0; index < files.length; index++) {
        formData.append("fileName", files[index]);
    }
    newRelase(formData)
  };

  return (
    <div className="container">
      <div className="page-inner animated fadeIn">
        <div className="flex-column flex-md-row d-flex justify-content-between align-center">
          <div>
            <h4 className="page-title">Nuevo Comunicado</h4>
            <p>
              Llene los datos solicitados en el formulario para poder crear un
              nuevo comunicado.
            </p>
          </div>
          <div>
            {alert ? (
              <p className={`alert ${alert.category}`}>{alert.msg}</p>
            ) : null}
          </div>
        </div>
        <div className="card bg-boxshadow">
          <div className="card-body">
            <form className="form-sample">
              <dl>
                <dt className="dt-edit-user">
                  <label>Ingresar nombre de comunicado</label>
                </dt>
                <dd>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    onChange={onChange}
                  ></input>
                </dd>
              </dl>

              <dl className="p-0 col-12 col-md-3">
                <dt className="dt-edit-user">
                  <label>Seleccione Fecha Y Año</label>
                </dt>
                <dd>
                  <select
                    className="form-control"
                    name="periodDateMonth"
                    onChange={onChange}
                  >
                    <option>SELECCIONE UN MES</option>
                    <option value="01">Enero</option>
                    <option value="02">Febrero</option>
                    <option value="03">Marzo</option>
                    <option value="04">Abril</option>
                    <option value="05">Mayo</option>
                    <option value="06">Junio</option>
                    <option value="07">Julio</option>
                    <option value="08">Agosto</option>
                    <option value="09">Setiembre</option>
                    <option value="10">Octubre</option>
                    <option value="11">Noviembre</option>
                    <option value="12">Diciembre</option>
                  </select>
                </dd>
                <dd>
                  <select
                    className="form-control"
                    name="periodDateYear"
                    onChange={onChange}
                  >
                    <option value="2020">2020</option>
                    <option value="2021" selected>2021</option>
                    <option value="2022">2022</option>
                  </select>
                </dd>
              </dl>
              <dl>
                <dt>
                  <label>Cargar comunicado y anexos</label>
                  <dd>
                    <input
                      type="file"
                      name="fileName"
                      onChange={uploadFiles}
                      multiple
                    ></input>
                  </dd>
                </dt>
              </dl>
              <br />
              <button
                className="btn rounded-btn btn-primary"
                onClick={onSubmit}
              >
                Continuar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRelase;

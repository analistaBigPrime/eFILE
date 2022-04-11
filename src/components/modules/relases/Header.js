import React, { useState, useContext, useEffect } from "react";
import RelasesContext from "../../../context/relases/RelasesContext";
import AlertContext from "../../../context/alerts/AlertContext";

const Haeader = () => {
  const { filterRelases } = useContext(RelasesContext);
  const { alert, showAlert, hideAlert } = useContext(AlertContext);

  const [option, setOption] = useState({
    tipoBusqueda: "periodo",
    month: "",
    year: "",
    name: ""
  })

  useEffect(() => {
    hideAlert();
    // eslint-disable-next-line
  }, [option.tipoBusqueda])

  const selectOption = e => {
    setOption({
      ...option,
      [e.target.getAttribute('name')]: e.target.getAttribute('value')
    })
  }

  const onChange = e => {
    setOption({
      ...option,
      name: e.target.value,
    });
  };

  const onSubmit = async e => {
    e.preventDefault();
    if(option.tipoBusqueda === 'periodo'){
      if (option.month === "" || option.year === "") {
        showAlert(
          "Por favor introduzca un valor.",
          "alert-danger col-12 col-lg-3"
        );
        return;
      }
      filterRelases({ tipoBusqueda: option.tipoBusqueda, valorBusqueda: `${option.month}-${option.year}` });
    }else{
      if (option.name.trim() === "") {
        showAlert(
          "Por favor introduzca un valor.",
          "alert-danger col-12 col-lg-3"
        );
        return;
      }
      filterRelases({ tipoBusqueda: option.tipoBusqueda, valorBusqueda: option.name});
    }
  };

  return (
    <div className="content__head">
      {alert ? <div className={`notification notification_type_error notification_status_active`}>{alert.msg}</div> : null}
      <form onSubmit={onSubmit} className="announcements__form">
        <label className="announcements__label">Buscar por: </label>
        <div className="select_wrap">
          <ul className="default_option">
            <li>
              <div className="option">Periodo</div>
            </li>
          </ul>
          <ul className="select_ul">
            <li>
              <div name="tipoBusqueda" value="periodo" onClick={(e) => selectOption(e)} className="option">Periodo</div>
            </li>
            <li>
              <div name="tipoBusqueda" value="name" onClick={(e) => selectOption(e)} className="option">Nombre</div>
            </li>
          </ul>
        </div>
        {
          option.tipoBusqueda === "periodo" ?
            <>
              <div className="select_wrap">
                <ul className="default_option">
                  <li>
                    <div className="option">Seleccione un mes</div>
                  </li>
                </ul>
                <ul className="select_ul">
                  <li>
                    <div name="month" value="01" onClick={(e) => selectOption(e)} className="option">Enero</div>
                  </li>
                  <li>
                    <div name="month" value="02" onClick={(e) => selectOption(e)} className="option">Febrero</div>
                  </li>
                  <li>
                    <div name="month" value="03" onClick={(e) => selectOption(e)} className="option">Marzo</div>
                  </li>
                  <li>
                    <div name="month" value="04" onClick={(e) => selectOption(e)} className="option">Abril</div>
                  </li>
                  <li>
                    <div name="month" value="05" onClick={(e) => selectOption(e)} className="option">Mayo</div>
                  </li>
                  <li>
                    <div name="month" value="06" onClick={(e) => selectOption(e)} className="option">Junio</div>
                  </li>
                  <li>
                    <div name="month" value="07" onClick={(e) => selectOption(e)} className="option">Julio</div>
                  </li>
                  <li>
                    <div name="month" value="08" onClick={(e) => selectOption(e)} className="option">Agosto</div>
                  </li>
                  <li>
                    <div name="month" value="09" onClick={(e) => selectOption(e)} className="option">Setiembre</div>
                  </li>
                  <li>
                    <div name="month" value="10" onClick={(e) => selectOption(e)} className="option">Octubre</div>
                  </li>
                  <li>
                    <div name="month" value="11" onClick={(e) => selectOption(e)} className="option">Noviembre</div>
                  </li>
                  <li>
                    <div name="month" value="12" onClick={(e) => selectOption(e)} className="option">Diciembre</div>
                  </li>
                </ul>
              </div>
              <div className="select_wrap">
                <ul className="default_option">
                  <li>
                    <div className="option">Seleccione un año</div>
                  </li>
                </ul>
                <ul className="select_ul">
                  <li>
                    <div name="year" value="2019" onClick={(e) => selectOption(e)} className="option">2019</div>
                  </li>
                  <li>
                    <div name="year" value="2020" onClick={(e) => selectOption(e)} className="option">2020</div>
                  </li>
                  <li>
                    <div name="year" value="2021" onClick={(e) => selectOption(e)} className="option">2021</div>
                  </li>
                  <li>
                    <div name="year" value="2022" onClick={(e) => selectOption(e)} className="option">2022</div>
                  </li>
                </ul>
              </div>
            </> : <div className="select_wrap"><input onChange={onChange} className="input__search" type="text" placeholder="Ingresar texto" /></div>
        }
        <input className="input__search-btn" type="submit" defaultValue="Buscar" />
      </form>
    </div>
  );
};

export default Haeader;

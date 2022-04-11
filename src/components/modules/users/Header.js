import React, { useState, useContext, useEffect } from "react";
import UsersContext from "../../../context/users/UsersContext";
import AlertContext from "../../../context/alerts/AlertContext";

const Haeader = () => {
  const { filterUsers } = useContext(UsersContext);
  const { alert, showAlert, hideAlert } = useContext(AlertContext);

  useEffect(() => {
    hideAlert();
    // eslint-disable-next-line
  }, [])

  const [option, setOption] = useState({tipoBusqueda: "name"})

  const selectOption = e => {
    setOption({
      ...option,
      [e.target.getAttribute('name')]: e.target.getAttribute('value')
    })
  }

  const [search, setSearch] = useState({valorBusqueda: "",});

  const onChange = e => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = e => {
    e.preventDefault()
    if (option.tipoBusqueda === "" ||search.valorBusqueda.trim() === "") {
      showAlert(
        "Por favor introduzca un valor.",
        "alert-danger col-12 col-lg-3"
      );
      return;
    }
    filterUsers({tipoBusqueda: option.tipoBusqueda, valorBusqueda: search.valorBusqueda});
  };
  
  return (
    <div className="content__head">
      {alert ? <div className={`notification notification_type_error notification_status_active`}>{alert.msg}</div> : null}
      <form className="users__form" onSubmit={onSubmit}>
        <label className="users__label">Buscar por:</label>
        <div class="select_wrap">
          <ul class="default_option">
            <li>
              <div class="option">Nombre y Apellidos</div>
            </li>
          </ul>
          <ul class="select_ul">
            <li>
              <div name="tipoBusqueda" value="name" class="option" onClick={(e) => selectOption(e)}>Nombre y Apellidos</div>
            </li>
            <li>
              <div name="tipoBusqueda" value="dni" class="option" onClick={(e) => selectOption(e)}>DNI</div>
            </li>
          </ul>
        </div>
        <input className="input__search" type="text" placeholder="Ingresar texto" onChange={onChange} name="valorBusqueda" />
        <input className="input__search-btn" type="submit" defaultValue="Buscar" />
      </form>
    </div>
  );
};

export default Haeader;

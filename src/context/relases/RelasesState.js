import React, { useReducer } from "react";
import RelasesContext from "./RelasesContext";
import RelasesReducer from "./RelasesReducer";
import clientAxios from "../../config/clientAxios";
import fileDownload from 'js-file-download'

import {
  GET_RELASES,
  GET_RELASE,
  NEW_RELASE,
  CANCEL_PROCESS_RELASE,
  SHOW_DOCUMENT_RELASE
} from "../../types";

const RelasesState = (props) => {
  const initialState = {
    relases: null,
    relase: null,
    infoNewRelase: null,
    redirectNewRelasePreview: false,
    usersRelase: null,
    redirectRelases: false,
    documentRelase: null
  };

  const [state, dispatch] = useReducer(RelasesReducer, initialState);

  //Obtener documentos
  const getRelases = async (pathname) => {
    try {
      const result = await clientAxios.get(`/api${pathname}`);
      dispatch({
        type: GET_RELASES,
        payload: result.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Filtrar comunicado
  const filterRelases = async (search) => {
    try {
      const result = await clientAxios.post("/api/comunicados/buscar", search);
      dispatch({
        type: GET_RELASES,
        payload: result.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //Obtner comunicado por id
  const getRelase = async (id) => {
    try {
      const result = await clientAxios.get(`/api/comunicados/show/${id}`);
      dispatch({
        type: GET_RELASE,
        payload: result.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Crear nuevo comunicado
  const newRelase = async (formData) => {
    try {
      const result = await clientAxios.post("/api/comunicados/crear", formData);
      dispatch({
        type: NEW_RELASE,
        payload: result.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //Cancelar proceso de comunicado
  const cancelProcessRelase = async (id) => {
    try {
      const result = await clientAxios.get(`/api/comunicados/cancelar/${id}`);
      dispatch({
        type: CANCEL_PROCESS_RELASE,
        payload: result.data,
      });
    } catch (error) {
      console.log(error.response.data);
    }
  };

  //Descargar 
  const download = async (url, id) => {
    try {
      const result = await clientAxios.get(url, {
        responseType: "blob"
      });
      fileDownload(result.data, id + '.pdf')
    } catch (error) {
      console.log(error);
    }
  };

  //Mostrar documento del comunicado
  const showDocumentRelase = async id => {
    try {
      const result = await clientAxios.get(`/api/comunicados/show-document/${id}`);
      dispatch({
        type: SHOW_DOCUMENT_RELASE,
        payload: result.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <RelasesContext.Provider
      value={{
        relases: state.relases,
        relase: state.relase,
        infoNewRelase: state.infoNewRelase,
        redirectNewRelasePreview: state.redirectNewRelasePreview,
        redirectRelases: state.redirectRelases,
        documentRelase: state.documentRelase,
        getRelases,
        filterRelases,
        getRelase,
        newRelase,
        cancelProcessRelase,
        download,
        showDocumentRelase
      }}
    >
      {props.children}
    </RelasesContext.Provider>
  );
};

export default RelasesState;

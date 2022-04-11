import React, { useReducer } from 'react';
import DocumentsContext from './DocumentsContext';
import DocumentsReducer from './DocumentsReducer'
import clientAxios from '../../config/clientAxios';
import {
    GET_DOCUMENTS,
    GET_DOCUMENT,
    VERIFY_DOCUMENT,
    DOWNLOAD_DOCUMENT
} from '../../types';

const DocumentsState = (props) => {
    const initialState = {
        documents: null,
        documento: null,
        signersValidation: null,
    }

    const [state, dispatch] = useReducer(DocumentsReducer, initialState)

    //Obtener documentos
    const getDocuments = async pathname => {
        try {
            const result = await clientAxios.get(`/api${pathname}`)
            dispatch({
                type: GET_DOCUMENTS,
                payload: result.data
            })
        }
        catch (error) {
            console.log(error);
        }
    }

    //Filtrar documentos
    const filterDocuments = async search => {
        try {
            const result = await clientAxios.post('/api/documents/buscar', search)
            dispatch({
                type: GET_DOCUMENTS,
                payload: result.data
            })
        }
        catch (error) {
            console.log(error);
        }
    }

    //Obtner un documento
    const getDocument = async id => {
        try {
            const result = await clientAxios.get(`/api/document/show-document/${id}`)
            dispatch({
                type: GET_DOCUMENT,
                payload: result.data
            })
        }
        catch (error) {
            console.log(error);
        }
    }

    //Verificar documento
    const verifyDocument = async (inboxUserId, documentId) => {
        try {
            const result = await clientAxios.get(`/api/document/verify/${inboxUserId}/${documentId}`)
            dispatch({
                type: VERIFY_DOCUMENT,
                payload: result.data
            })
        }
        catch (error) {
            console.log(error);
        }
    }

    const downloadDocument = async id => {
        try {
            const result = await clientAxios.get(`/api/download-document/${id}`)
            dispatch({
                type: DOWNLOAD_DOCUMENT,
                payload: result
            })
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <DocumentsContext.Provider
            value={{
                documents: state.documents,
                documento: state.documento,
                signersValidation: state.signersValidation,
                getDocuments,
                filterDocuments,
                getDocument,
                verifyDocument,
                downloadDocument
            }}
        >
            {props.children}
        </DocumentsContext.Provider>
    );
}

export default DocumentsState;

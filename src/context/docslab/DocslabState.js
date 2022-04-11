import React, { useReducer} from 'react';
import DocslabContext from './DocslabContext';
import DocslabReducer from './DocslabReducer'
import clientAxios from '../../config/clientAxios';
import {
    GET_DOCSLAB,
    GET_DOCLAB,
    GET_DOCLAB_PDF
} from '../../types';

const DocslabState = (props) => {
    const initialState ={
        docslab: null,
        doclab: null
    }

    const[state, dispatch] = useReducer(DocslabReducer, initialState)
    
    //Obtener documentos
    const getDocslab = async pathname =>{
        try{
            const result = await clientAxios.get(`/api${pathname}`)
            dispatch({
                type: GET_DOCSLAB,
                payload: result.data
            })
        }
        catch(error){
            console.log(error);
        }
    }

    //Filtrar documentos
    const filterDocslab = async search =>{
        try{
            const result = await clientAxios.post('/api/doclaboral/buscar', search)
            dispatch({
                type: GET_DOCSLAB,
                payload: result.data
            })
        }
        catch(error){
            console.log(error);
        }
    }

     //Obtner un documento
    const getDoclab = async pathname =>{
        try{
            const result = await clientAxios.get(`/api${pathname}`)
            dispatch({
                type: GET_DOCLAB,
                payload: result.data
            })
        }
        catch(error){
            console.log(error);
        }
    }

    const getDoclabPdf = async () =>{
        try{
            const result = await clientAxios.get('api/download/document/5137')
            console.log(result)
            dispatch({
                type: GET_DOCLAB_PDF,
                payload: result
            })
        }
        catch(error){
            console.log(error);
        }
    }

    return (
        <DocslabContext.Provider
            value={{
                docslab: state.docslab,
                doclab: state.doclab,
                getDocslab,
                filterDocslab,
                getDoclab,
                getDoclabPdf

            }}
        >
            {props.children}
        </DocslabContext.Provider>
    );
}
 
export default DocslabState;

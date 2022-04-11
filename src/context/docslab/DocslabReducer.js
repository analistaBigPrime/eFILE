import {
    GET_DOCSLAB,
    GET_DOCLAB,
    GET_DOCLAB_PDF
} from '../../types/index';

const DocumentsReducer = (state, action) => {
    switch(action.type){
        case GET_DOCSLAB:
            return{
                ...state,
                docslab: action.payload
            }
        case GET_DOCLAB:
            return{
                ...state,
                doclab: action.payload
            }
        case GET_DOCLAB_PDF:
            return{
                ...state,
            }
        default:
            return state;
    }
}
 
export default DocumentsReducer;
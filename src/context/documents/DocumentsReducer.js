import {
    GET_DOCUMENTS,
    GET_DOCUMENT,
    VERIFY_DOCUMENT,
    DOWNLOAD_DOCUMENT,
} from '../../types/index';

const DocumentsReducer = (state, action) => {
    switch (action.type) {
        case GET_DOCUMENTS:
            return {
                ...state,
                documents: action.payload,
                documento: null
            }
        case GET_DOCUMENT:
            return {
                ...state,
                documento: action.payload
            }
        case VERIFY_DOCUMENT:
            return {
                ...state,
                signersValidation: action.payload
            }
        case DOWNLOAD_DOCUMENT:
            return {
                ...state
            }
        default:
            return state;
    }
}

export default DocumentsReducer;
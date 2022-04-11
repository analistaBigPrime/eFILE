import {
    GET_RELASES,
    GET_RELASE,
    NEW_RELASE,
    CANCEL_PROCESS_RELASE,
    SHOW_DOCUMENT_RELASE
} from '../../types/index';

const RelasesReducer = (state, action) => {
    switch (action.type) {
        case GET_RELASES:
            return {
                ...state,
                relases: action.payload
            }
        case GET_RELASE:
            return {
                ...state,
                relase: action.payload
            }
        case NEW_RELASE:
            return {
                ...state,
                infoNewRelase: action.payload,
                redirectNewRelasePreview: true
            }
        case CANCEL_PROCESS_RELASE:
            return {
                ...state,
                redirectRelases: true
            }
        case SHOW_DOCUMENT_RELASE:
            return {
                ...state,
                documentRelase: action.payload
            }
        default:
            return state;
    }
}

export default RelasesReducer;
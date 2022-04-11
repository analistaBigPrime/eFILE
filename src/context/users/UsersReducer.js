import {
    GET_USERS,
    GET_USER,
    UPDATE_USER,
    UPDATE_USER_ERROR,
    NEW_USER_SUCCESS,
    NEW_USER_ERROR,
    UPLOAD_USERS,
    ACTIVATE_USERS,
    RESTORE_PASSWORD,
    DISABLE_USER,
    ENABLE_USER,
} from '../../types/index';

const DocumentsReducer = (state, action) => {
    switch(action.type){
        case GET_USERS:
            return{
                ...state,
                users: action.payload,
                redirectUsers: false,
                rpUserError: null
            }
        case GET_USER:
            return{
                ...state,
                user: action.payload
            }
        case NEW_USER_SUCCESS:
            return{
                ...state,
                rpAlertSuccess: action.payload,
                redirectUsers: true,
                rpUserError: null
            }
        case UPDATE_USER_ERROR:
        case NEW_USER_ERROR:
            return{
                ...state,
                rpUserError: action.payload,
                redirectUsers: false,
                rpAlertSuccess: null
            }
        case UPDATE_USER:
        case UPLOAD_USERS:
        case ACTIVATE_USERS:
        case RESTORE_PASSWORD:
        case DISABLE_USER:
        case ENABLE_USER:
            return{
                ...state,
                rpAlertSuccess: action.payload,
                redirectUsers: true,
            }
        default:
            return state;
    }
}
 
export default DocumentsReducer;
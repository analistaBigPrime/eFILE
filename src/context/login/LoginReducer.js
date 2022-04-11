import {
    GET_COMPANY,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    SIGN_OFF,
    GET_USER,
    GET_USER_PERMISSIONS,
    RESET_PWD
} from '../../types/index';
import clientAxios from '../../config/clientAxios';

const LoginReducer = (state, action) => {
    switch(action.type){
        case GET_COMPANY:
            return{
                ...state,
                infoCompany: action.payload,
                redirectLogin: null,
                load: false
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.access_token)
            return{
                ...state,
                auth: true,
                load: false,
            }
        case LOGIN_ERROR:
        case SIGN_OFF: 
            delete clientAxios.defaults.headers.common['Authorization'];
            localStorage.removeItem('token')
            return{
                ...state,
                auth: false,
                load: true,
                token: null,
                user: null,
                rpError: action.payload
            }
        case GET_USER:
            return{
                ...state,
                auth: true,
                load: false,
                user: action.payload
            }
        case GET_USER_PERMISSIONS:
            return{
                ...state,
                auth: true,
                load: false,
                userPermissions: action.payload
            }
        case RESET_PWD:
            return{
                ...state,
                redirectLogin: true,
                rpSuccess: action.payload
            }
        default:
            return state;
    }
}
 
export default LoginReducer;
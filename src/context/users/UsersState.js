import React, { useReducer } from 'react';
import UsersContext from './UsersContext';
import UsersReducer from './UsersReducer'
import clientAxios from '../../config/clientAxios';
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
} from '../../types';

const UsersState = (props) => {

    const initialState = {
        users: null,
        user: null,
        rpAlertSuccess: null,
        rpUserError: null,
        redirectUsers: false
    }

    const [state, dispatch] = useReducer(UsersReducer, initialState)

    //Obtener documentos
    const getUsers = async pathname => {
        try {
            const result = await clientAxios.get(`/api${pathname}`)
            dispatch({
                type: GET_USERS,
                payload: result.data
            })
        }
        catch (error) {
            console.log(error);
        }
    }

    // Filtrar documentos
    const filterUsers = async search => {
        try {
            const result = await clientAxios.post('/api/usuarios/buscar', search)
            console.log(result.data)
            dispatch({
                type: GET_USERS,
                payload: result.data
            })
        }
        catch (error) {
            console.log(error);
        }
    }

    //Obtner usuario por id
    const getUser = async id => {
        try {
            const result = await clientAxios.get(`/api/usuarios/show/${id}`)
            dispatch({
                type: GET_USER,
                payload: result.data
            })
        }
        catch (error) {
            console.log(error);
        }
    }

    //Actualizar usuario por id
    const updateUser = async (id, editUser) => {
        try {
            const result = await clientAxios.post(`/api/update-user/${id}`, editUser)
            dispatch({
                type: UPDATE_USER,
                payload: result.data
            })
            setTimeout(() => {
                dispatch({
                    type: UPDATE_USER,
                    payload: null
                })
            }, 5000);
        }
        catch (error) {
            console.log(error.response.data)
            const alert = {
                msg: error.response.data,
                category: 'alert-danger'
            }
            dispatch({
                type: UPDATE_USER_ERROR,
                payload: alert
            })
        }
    }

    //Crear Usuario
    const newUser = async user => {
        try {
            const result = await clientAxios.post('/api/save-user', user)
            dispatch({
                type: NEW_USER_SUCCESS,
                payload: result.data
            })
            setTimeout(() => {
                dispatch({
                    type: NEW_USER_SUCCESS,
                    payload: null
                })
            }, 5000);
        }
        catch (error) {
            const alert = {
                msg: error.response.data,
                category: 'alert-danger'
            }
            dispatch({
                type: NEW_USER_ERROR,
                payload: alert
            })
        }
    }

    //Subir usuarios por excel
    const uploadUsers = async file => {
        try {
            const result = await clientAxios.post('/api/severals', file)
            dispatch({
                type: UPLOAD_USERS,
                payload: result.data
            })
            setTimeout(() => {
                dispatch({
                    type: UPLOAD_USERS,
                    payload: null
                })
            }, 5000);
        }
        catch (error) {
            console.log(error);
        }
    }

    //Activar usuarios
    const activateUsers = async file => {
        try {
            const result = await clientAxios.post('/api/enable-user', file)
            dispatch({
                type: ACTIVATE_USERS,
                payload: result.data
            })
            setTimeout(() => {
                dispatch({
                    type: ACTIVATE_USERS,
                    payload: null
                })
            }, 5000);
        }
        catch (error) {
            console.log(error);
        }
    }

    //Restaurar contraseña de usuario
    const restorePassword = async id => {
        try {
            const result = await clientAxios.get(`/api/usuario/restore/${id}`)
            dispatch({
                type: RESTORE_PASSWORD,
                payload: result.data
            })
            setTimeout(() => {
                dispatch({
                    type: RESTORE_PASSWORD,
                    payload: null
                })
            }, 5000);
        }
        catch (error) {
            console.log(error);
        }
    }

    //Activar usuario
    const disableUser = async id => {
        try {
            const result = await clientAxios.get(`/api/usuario/disable/${id}`)
            dispatch({
                type: DISABLE_USER,
                payload: result.data
            })
            setTimeout(() => {
                dispatch({
                    type: DISABLE_USER,
                    payload: null
                })
            }, 5000);
        }
        catch (error) {
            console.log(error);
        }
    }

    //Desactivar usuario
    const enableUser = async id => {
        try {
            const result = await clientAxios.get(`api/usuario/enable/${id}`)
            dispatch({
                type: ENABLE_USER,
                payload: result.data
            })
            setTimeout(() => {
                dispatch({
                    type: ENABLE_USER,
                    payload: null
                })
            }, 5000);
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <UsersContext.Provider
            value={{
                users: state.users,
                user: state.user,
                rpAlertSuccess: state.rpAlertSuccess,
                rpUserError: state.rpUserError,
                redirectUsers: state.redirectUsers,
                getUsers,
                filterUsers,
                getUser,
                updateUser,
                newUser,
                uploadUsers,
                activateUsers,
                restorePassword,
                disableUser,
                enableUser
            }}
        >
            {props.children}
        </UsersContext.Provider>
    );
}

export default UsersState;

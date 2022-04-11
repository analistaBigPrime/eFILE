import React, { useReducer } from "react";
import LoginContext from "./LoginContext";
import LoginReducer from "./LoginReducer";
import clientAxios from "../../config/clientAxios";
import tokenAuth from "../../config/tokenAuth";
import { backendUrl } from "../../config/env";
import axios from "axios";

import {
  GET_COMPANY,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGN_OFF,
  GET_USER,
  GET_USER_PERMISSIONS,
  RESET_PWD,
} from "../../types";

const LoginState = (props) => {
  const initialState = {
    infoCompany: null,
    token: localStorage.getItem("token"),
    auth: false,
    rpError: null,
    user: false,
    load: false,
    rpSuccess: null,
    redirectLogin: false,
    userPermissions: null
  };

  const [state, dispatch] = useReducer(LoginReducer, initialState);

  const getCompany = async () => {
    try {
      const result = await axios.get(`${backendUrl()}/api/info-company`);
      dispatch({
        type: GET_COMPANY,
        payload: result.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getUserAuth = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      tokenAuth(token);
    }
    try {
      const response = await clientAxios.get("/api/me");
      dispatch({
        type: GET_USER,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: LOGIN_ERROR,
      });
    }
  };

  const getUserPermissions = async () =>{
    const token = localStorage.getItem("token");
    if (token) {
      tokenAuth(token);
    }
    try {
      const response = await clientAxios.get("/api/permissions");
      dispatch({
        type: GET_USER_PERMISSIONS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: LOGIN_ERROR,
      });
    }
  }

  const login = async (user) => {
    try {
      const result = await clientAxios.post("/api/login", user);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: result.data,
      });
    } catch (error) {
      dispatch({
        type: LOGIN_ERROR,
        payload: error.response.data.message,
      });
      setTimeout(() => {
        dispatch({
          type: LOGIN_ERROR,
          payload: null,
        });
      }, 5000);
    }
  };

  const signOff = () => {
    dispatch({
      type: SIGN_OFF,
    });
  };

  const resetPwd = async (user) => {
    try {
      const result = await axios.post(`${backendUrl()}/api/reset-pwd`, user);
      dispatch({
        type: RESET_PWD,
        payload: result.data,
      });
      setTimeout(() => {
        dispatch({
          type: RESET_PWD,
          payload: null,
        });
      }, 5000);
    } catch (error) {
      console.log(error.response.data);
      dispatch({
        type: LOGIN_ERROR,
        payload: error.response.data,
      });
      setTimeout(() => {
        dispatch({
          type: LOGIN_ERROR,
          payload: null,
        });
      }, 5000);
    }
  };

  return (
    <LoginContext.Provider
      value={{
        infoCompany: state.infoCompany,
        rpError: state.rpError,
        auth: state.auth,
        user: state.user,
        load: state.load,
        rpSuccess: state.rpSuccess,
        redirectLogin: state.redirectLogin,
        userPermissions: state.userPermissions,
        getCompany,
        login,
        getUserAuth,
        getUserPermissions,
        signOff,
        resetPwd,
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginState;

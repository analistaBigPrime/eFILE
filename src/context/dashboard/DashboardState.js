import React, { useReducer} from 'react';
import DashboardContext from './DashboardContext';
import DashboardReducer from './DashboardReducer'
import clientAxios from '../../config/clientAxios';
import {
    GET_DASHBOARD,
} from '../../types';

const DashboardState = (props) => {
    const initialState ={
        dashboardData: null
    }

    const[state, dispatch] = useReducer(DashboardReducer, initialState)

    const getDashboard = async () =>{
        try{
            const result = await clientAxios.get('/api/dashboard')
            dispatch({
                type: GET_DASHBOARD,
                payload: result.data
            })
        }
        catch(error){
            console.log(error);
        }
    }

    return (
        <DashboardContext.Provider
            value={{
                dashboardData: state.dashboardData,
                getDashboard
            }}
        >
            {props.children}
        </DashboardContext.Provider>
    );
}
 
export default DashboardState;

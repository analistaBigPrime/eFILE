import {
    GET_DASHBOARD,
} from '../../types/index';

const DashboardReducer = (state, action) => {
    switch (action.type) {
        case GET_DASHBOARD:
            return {
                ...state,
                dashboardData: action.payload
            }
        default:
            return state;
    }
}

export default DashboardReducer;
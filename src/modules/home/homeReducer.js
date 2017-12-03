import * as types from '../../constants/actionTypes';
import initialState from '../../reducers/initialState';

export default function homeAction(state = initialState.data, action) {
    switch (action.type) {
        case types.GET_DATA:
            return {
                ...state,
                ...{
                    data: action.data
                }
            };
        case types.GET_DATA_PEOPLE:
            return {
                ...state,
                ...{
                    staff: action.staff
                }
            };
        case types.GET_DATA_SCHEDULES:
            return {
                ...state,
                ...{
                    schedules: action.schedules
                }
            };
        case types.GET_DATA_ROLE:
            return {
                ...state,
                ...{
                    roles: action.roles
                }
            };
        case types.GET_DATA_STUDY_SESSION:
            return {
                ...state,
                ...{
                    study_sessions: action.study_sessions
                }
            };
        default:
            return state
    }
}
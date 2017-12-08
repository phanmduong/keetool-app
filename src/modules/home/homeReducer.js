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
        case types.GET_DATA_REGISTER_STUDENT:
            return {
                ...state,
                ...{
                    registers: action.registers
                }
            };
        case types.GET_DATA_GENS:
            return {
                ...state,
                ...{
                    gens: action.gens
                }
            };
        case types.GET_DATA_COURSE:
            return {
                ...state,
                ...{
                    courses: action.courses
                }
            };
        case types.GET_DATA_CLASSES:
            return {
                ...state,
                ...{
                    classes: action.classes
                }
            };
        case types.GET_DATA_CLASS:
            return {
                ...state,
                ...{
                    classInfo: action.classInfo
                }
            };
        case types.GET_DATA_CALL_HISTORY:
            return {
                ...state,
                ...{
                    call_history: action.call_history
                }
            };
        case types.GET_DATA_BASE:
            return {
                ...state,
                ...{
                    bases: action.bases
                }
            };
        case types.GET_DATA_MONEY_COLLECT:
            return {
                ...state,
                ...{
                    moneyCollect: action.moneyCollect
                }
            };
        default:
            return state
    }
}
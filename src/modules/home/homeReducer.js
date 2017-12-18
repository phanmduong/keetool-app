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
        case types.GET_DATA_SHIFT_REGISTER:
            return {
                ...state,
                ...{
                    shift_register: action.shift_register
                }
            };

        case types.GET_DATA_SHIFT_SESSION:
            return {
                ...state,
                ...{
                    shift_sessions: action.shift_sessions
                }
            };

        case types.GET_DATA_EMAIL_FORM:
            return {
                ...state,
                ...{
                    email_forms: action.email_forms
                }
            };

        case types.GET_DATA_EMAIL_TEMPLATE:
            return {
                ...state,
                ...{
                    email_templates: action.email_templates
                }
            };
         case types.GET_DATA_CAMPAIGN:
            return {
                ...state,
                ...{
                    campaigns: action.campaigns
                }
            };

        case types.GET_DATA_SUBSCRIBER_LIST:
            return {
                ...state,
                ...{
                    subscribers_list: action.subscribers_list
                }
            };
       case types.GET_DATA_SUBSCRIBER:
            return {
                ...state,
                ...{
                    subscriber: action.subscriber
                }
            };

        case types.GET_DATA_PAID_LIST:
            return {
                ...state,
                ...{
                    paidList: action.paidList
                }
            };
        case types.GET_DATA_TELE_CALL:
            return {
                ...state,
                ...{
                    tele_calls: action.tele_calls
                }
            };
         case types.GET_DATA_MARKETING_CAMPAIGN:
            return {
                ...state,
                ...{
                    marketing_campaigns: action.marketing_campaigns
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
        case types.GET_DATA_BASE_ROOM:
            return {
                ...state,
                ...{
                    rooms: action.rooms
                }
            };
        case types.GET_DATA_MONEY_COLLECT:
            return {
                ...state,
                ...{
                    moneyCollect: action.moneyCollect
                }
            };
        case types.GET_DATA_PAIDLIST:
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
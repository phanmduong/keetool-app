import * as types from '../../constants/actionTypes';
import initialState from '../../reducers/initialState';

export default function listBlogReducer(state = initialState.home, action) {
    switch (action.type) {
        case types.BEGIN_GET_DATA:
            return {
                ...state,
                ...{
                    isLoading: true,
                }
            };
        case types.GET_DATA_SUCCESS:
            return {
                ...state,
                ...{
                    isLoading: false,
                    data: action.data,
                }
            };
        default:
            return state
    }
}
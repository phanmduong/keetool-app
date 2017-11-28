import * as types from '../../constants/actionTypes';
import initialState from '../../reducers/initialState';

export default function testReducer(state = initialState.theme, action) {
    switch (action.type) {
        case types.THEME_LIGHT :
            return {
                ...state,
                ...{
                    themeColor: '#F12445'
                }
            }
        case types.THEME_DARK :
            return {
                ...state,
                ...{
                    themeColor: '#054412'
                }
            }
        default :
            return state;
    }
}
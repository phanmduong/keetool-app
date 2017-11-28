import * as types from '../../constants/actionTypes';
import initialState from '../../reducers/initialState';

export default function listBlogReducer(state = initialState.theme, action) {
    switch (action.type) {
        case types.THEME_DARK:
            return {
                ...state,
                ...{
                    themeType: 'colorDark'
                }
            };
        case types.THEME_LIGHT:
            return {
                ...state,
                ...{
                    themeType: 'colorLight'
                }
            };
        default:
            return state
    }
}
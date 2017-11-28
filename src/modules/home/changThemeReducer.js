import * as types from '../../constants/actionTypes';
import initialState from '../../reducers/initialState';

export default function changThemeReducer(state = initialState.theme, action) {
    switch (action.type) {
        case types.THEME_DARK:
            return {
                ...state,
                ...{
                    theme: action.theme,
                    general : action.general,
                    colors: action.colors
                }
            };
        case types.THEME_LIGHT:
            return {
                ...state,
                ...{
                    theme: action.theme,
                    general: action.general,
                    colors: action.colors
                }
            };
        default:
            return state
    }
}